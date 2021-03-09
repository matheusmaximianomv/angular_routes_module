import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { IStudent } from 'src/app/shared';

@Component({
  selector: 'app-students-details',
  templateUrl: './students-details.component.html',
  styleUrls: ['./students-details.component.less']
})
export class StudentsDetailsComponent
  implements OnInit, OnDestroy {

  public student!: IStudent;
  private subscriptions: Array<Subscription> = [];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) { }

  private getStudent(): void {
    const subscription = this.route.data
      .subscribe(
        (response: { student: IStudent }) => {
          const { student } = response;

          if (student) {
            this.student = student;
          } else {
            this.router.navigate(['students']);
          }

        },
        err => {
          this.router.navigate(['students']);
        }
      );

    this.subscriptions.push(subscription);
  }

  public onNavigateToEditStudent(): void {
    this.router.navigate(['students', this.student.id, 'edit']);
  }

  public ngOnInit(): void {
    this.getStudent();
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}
