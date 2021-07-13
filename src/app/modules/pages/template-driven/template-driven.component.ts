import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.less']
})
export class TemplateDrivenComponent implements OnInit {

  constructor() { }

  public onSubmitForm(userForm: NgForm): void {
    console.log('userForm -> ', userForm);
  }

  public ngOnInit(): void {
  }
}
