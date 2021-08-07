import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.less']
})
export class DataDrivenComponent implements OnInit {

  private userForm: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
  ) { }

  public onSubmit(): void {
    console.log('userForm -> ', this.userForm);
  }

  private initFormularyWithBuilder(): void {
    this.userForm = this.formBuilder.group({
      name: [''],
      email: [''],
    });
  }

  private initFormularyWithInstance(): void {
    this.userForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
    });
  }

  public ngOnInit(): void {
    this.initFormularyWithBuilder();
    // this.initFormularyWithInstance();
  }

}
