import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

import { CoursesService } from '../../../../core';
import { ICourse } from '../../../../shared';

interface IParamsRoute {
  id: string;
}

@Component({
  selector: 'app-courses-details',
  templateUrl: './courses-details.component.html',
  styleUrls: ['./courses-details.component.less'],
})
export class CoursesDetailsComponent implements OnInit, OnDestroy {

  private subscribeRouteParams: Subscription;
  public course: ICourse;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly coursesService: CoursesService
  ) {}

  private getParamId(): void {
    this.subscribeRouteParams = this.route.params.subscribe(({ id }: IParamsRoute) => {
      this.getCourseById(id);
    });
  }

  private getCourseById(id: string): void {
    this.coursesService
      .getCourseById(id)
      .pipe(take(1))
      .subscribe(data => {
        this.course = data;

        if (!this.course) {
          this.router.navigate['courses/not-found']
        }
      });

  }

  public ngOnInit(): void {
    this.getParamId();
  }

  public ngOnDestroy(): void {
    this.subscribeRouteParams.unsubscribe();
  }
}
