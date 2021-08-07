import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.less']
})
export class DataDrivenComponent implements OnInit {

  private userForm: FormGroup;

  constructor() { }

  public onSubmit(): void {
    console.log('userForm -> ', this.userForm);
  }

  private initFormulary(): void {
    this.userForm = new FormGroup({});
  }

  public ngOnInit(): void {
    this.initFormulary();
  }

}
