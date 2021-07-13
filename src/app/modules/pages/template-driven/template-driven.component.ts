import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.less']
})
export class TemplateDrivenComponent implements OnInit {

  constructor(
    private readonly httpClient: HttpClient,
  ) { }

  public eventBlurCep(cep: string): void {
    cep = cep.replace(/\D/g, '');

    if (cep) {
      const cepValidator = /^[0-9]{8}$/;

      if (cepValidator.test(cep)) {
        this.httpClient
          .get(`//viacep.com.br/ws/${cep}/json`)
          .pipe(take(1), map(result => result))
          .subscribe(
            response => {
              console.log(response);
            }
          );
      }
    }
  }

  public onSubmitForm(userForm: NgForm): void {
    console.log('userForm -> ', userForm);
  }

  public ngOnInit(): void {
  }
}
