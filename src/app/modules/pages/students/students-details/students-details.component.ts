import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

import { StudentsService } from 'src/app/core';
import { IStudent } from 'src/app/shared';

interface IParamsRoute {
  id: number;
}

@Component({
  selector: 'app-students-details',
  templateUrl: './students-details.component.html',
  styleUrls: ['./students-details.component.less']
})
export class StudentsDetailsComponent
  implements OnInit, OnDestroy {

  private studentId!: number;
  public student!: IStudent;
  private subscriptions: Array<Subscription> = [];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly studentsService: StudentsService,
  ) { }

  private getStudentById(): void {
    this.studentsService
      .show(+this.studentId)
      .pipe(take(1))
      .subscribe(
        response => {
          this.student = response;
        },
      );
  }

  private getParams(): void {
    const subscription = this.route
      .params
      .subscribe((routeParams: IParamsRoute) => {
        this.studentId = routeParams.id;

        this.getStudentById();
      });

    this.subscriptions.push(subscription);
  }

  public onNavigateToEditStudent(): void {
    this.router.navigate(['students', this.studentId, 'edit']);
  }

  public ngOnInit(): void {
    this.getParams();
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}
