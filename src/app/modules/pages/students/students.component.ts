import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

import { StudentsService } from 'src/app/core';
import { IStudent } from 'src/app/shared';

@Component({
  selector: 'app-students',
  templateUrl: 'students.component.html',
  styleUrls: ['students.component.less']
})
export class StudentsComponent implements OnInit{

  public nameComponent: string = 'Students Component';
  public students: Array<IStudent> = [];

  constructor(
    private readonly studentsService: StudentsService,
    private readonly router: Router,
  ) {}

  private getStudents(): void {
    this.studentsService
      .index()
      .pipe(take(1))
      .subscribe(
        (response) => {
          this.students = response;
        }
      );
  }

  public onNavigateToCreateStudent(): void {
    this.router.navigate(['students', 'new']);
  }

  public ngOnInit(): void {
    this.getStudents();
  }
}
