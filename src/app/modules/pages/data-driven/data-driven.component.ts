import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';

import { IAddress, IViaCEPAddress } from 'src/app/shared/models';

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.less'],
})
export class DataDrivenComponent implements OnInit {
  public userForm: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly httpClient: HttpClient
  ) {}

  public onSubmit(): void {
    if (this.userForm.valid) {
      console.log('userForm -> ', this.userForm);
    } else {
      this.verifyValidationsForm(this.userForm);
    }
  }

  public onReset(): void {
    this.userForm.reset();
  }

  public eventBlurCep(): void {
    const cep = this.userForm.get('address.cep').value;

    if (cep) {
      const cepPattern = new RegExp(/^\d{8}/);

      this.setValuesFromAddress({} as IAddress);
      if (cepPattern.test(cep)) {
        this.httpClient
          .get(`//viacep.com.br/ws/${cep}/json`)
          .pipe(take(1))
          .subscribe((response: IViaCEPAddress) => {
            this.setValuesFromAddress({
              city: response.localidade,
              complement: response.complemento,
              neighborhood: response.bairro,
              state: response.uf,
              street: response.logradouro,
            });
          });
      }
    }
  }

  public showMessageControlError(controlName: string): boolean {
    const control = this.userForm.get(controlName);

    return !control.valid && control.touched;
  }

  public generateMessageFieldError(
    controlName: string,
    label?: string
  ): string {
    const control = this.userForm.get(controlName);

    const errorsDescription: Record<string, string> = {
      required: `O campo ${label || controlName} é obrigatório.`,
      minlength: `
        O campo ${label || controlName} precisa ter no mínimo
        ${
          control.errors.minlength && control.errors.minlength.requiredLength
        } caracteres.
      `,
      maxlength: `
        O campo ${label || controlName} precisa ter no máximo
        ${
          control.errors.maxlength && control.errors.maxlength.requiredLength
        } caracteres.
      `,
    };

    for (const key in control.errors) {
      if (control.errors.hasOwnProperty(key) && control.touched) {
        return errorsDescription[key];
      }
    }
  }

  private setValuesFromAddress(data?: IAddress): void {
    const { street, city, complement, neighborhood, state } = data;

    this.userForm.patchValue({
      address: {
        state: state || '',
        city: city || '',
        neighborhood: neighborhood || '',
        street: street || '',
        complement: complement || '',
      },
    });
  }

  private verifyValidationsForm(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach((controlName) => {
      const control = formGroup.get(controlName);
      control.markAsDirty();
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.verifyValidationsForm(control);
      }
    });
  }

  private initFormularyWithBuilder(): void {
    this.userForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      address: this.formBuilder.group({
        cep: ['', [Validators.required]],
        state: ['', [Validators.required]],
        city: ['', [Validators.required]],
        neighborhood: ['', [Validators.required]],
        street: ['', [Validators.required]],
        number: ['', [Validators.required]],
        complement: ['', [Validators.required]],
      }),
    });
  }

  private initFormularyWithInstance(): void {
    this.userForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormGroup({
        cep: new FormControl('', [Validators.required]),
        state: new FormControl('', [Validators.required]),
        city: new FormControl('', [Validators.required]),
        neighborhood: new FormControl('', [Validators.required]),
        street: new FormControl('', [Validators.required]),
        number: new FormControl('', [Validators.required]),
        complement: new FormControl('', [Validators.required]),
      }),
    });
  }

  public ngOnInit(): void {
    this.initFormularyWithBuilder();
    // this.initFormularyWithInstance();
  }
}
