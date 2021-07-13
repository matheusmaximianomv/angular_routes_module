import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { take, map } from 'rxjs/operators';

interface Address {
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  number?: string;
  complement?: string;
}

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.less']
})
export class TemplateDrivenComponent implements OnInit {

  constructor(
    private readonly httpClient: HttpClient,
  ) { }

  public eventBlurCep(cep: string, userForm: NgForm): void {
    cep = cep.replace(/\D/g, '');

    if (cep) {
      const cepValidator = /^[0-9]{8}$/;

      if (cepValidator.test(cep)) {
        this.httpClient
          .get(`//viacep.com.br/ws/${cep}/json`)
          .pipe(take(1), map(result => result))
          .subscribe(
            response => {
              const {
                bairro: neighborhood,
                cep: cepFormatted,
                complemento: complement,
                localidade: city,
                logradouro: street,
                uf: state,
              } = response as any;

              this.updateValuesFromAddress({
                cep: cepFormatted,
                city,
                neighborhood,
                state,
                street,
                complement
              }, userForm);
            }
          );
      }
    }
  }

  private resetValuesFromAddress(userForm: NgForm): void {
    userForm.form.patchValue({
      address: {
        street: null,
        complement: null,
        neighborhood: null,
        city: null,
        state: null,
      }
    });
  }

  private updateValuesFromAddress(address: Address, userForm: NgForm): void {
    this.resetValuesFromAddress(userForm);

    userForm.form.patchValue({
      address
    });
  }

  public onSubmitForm(userForm: NgForm): void {
    console.log('userForm -> ', userForm);
  }

  public ngOnInit(): void {
  }
}
