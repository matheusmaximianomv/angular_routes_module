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
