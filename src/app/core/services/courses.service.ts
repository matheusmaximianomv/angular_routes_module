import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { ICourse } from '../../shared/models';
import { CourseMock } from '../../shared/mocks';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private courseMock: CourseMock = new CourseMock();

  constructor() {}

  public getCourses(): Observable<Array<ICourse>> {
    return of(this.courseMock.getData());
  }

  public getCourseById(id: string): Observable<ICourse> {
    return of(this.courseMock.show(id));
  }
}
