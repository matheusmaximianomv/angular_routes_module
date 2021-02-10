import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: 'students.component.html',
  styleUrls: ['students.component.less']
})
export class StudentsComponent implements OnInit{

  public nameComponent: string = 'Students Component';

  constructor() {}

  public ngOnInit(): void {

  }
}
