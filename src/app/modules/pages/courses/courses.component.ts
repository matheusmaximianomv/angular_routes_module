import { Component, OnInit } from '@angular/core';

import { take } from 'rxjs/operators';

import { CoursesService } from '../../../core';

import { ICourse } from '../../../shared';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.less']
})
export class CoursesComponent implements OnInit {

  public courses: Array<ICourse>;

  constructor(
    private readonly coursesService: CoursesService
  ) { }

  private getAllCourses(): void {
    this.coursesService
      .getCourses()
      .pipe(take(1))
      .subscribe(data => {
        this.courses = data;
      });
  }

  public ngOnInit(): void {
    this.getAllCourses();
  }

}
