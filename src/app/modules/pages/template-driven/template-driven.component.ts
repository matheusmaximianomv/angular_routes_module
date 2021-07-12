import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

interface UserForm {
  name: string;
  email: string;
}
@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.less']
})
export class TemplateDrivenComponent implements OnInit {

  public initialValues: UserForm = {
    name: 'Matheus Maximiano de Melo Vieira',
    email: 'matheus@email.com'
  };

  constructor() { }

  public onSubmitForm(userForm: NgForm): void {
    console.log('userForm -> ', userForm);
  }

  public ngOnInit(): void {
  }
}
