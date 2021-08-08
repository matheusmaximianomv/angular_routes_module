import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.less'],
})
export class DataDrivenComponent implements OnInit {
  public userForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {}

  public onSubmit(): void {
    console.log('userForm -> ', this.userForm);
  }

  public onReset(): void {
    this.userForm.reset();
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
    });
  }

  public ngOnInit(): void {
    this.initFormularyWithBuilder();
    // this.initFormularyWithInstance();
  }
}
