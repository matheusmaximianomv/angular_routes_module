import { Injectable } from '@angular/core';

import { StudentMock, IStudent } from 'src/app/shared';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {

  private studentMock = new StudentMock();

  constructor() {}

  public index(): Observable<Array<IStudent>> {
    return of(this.studentMock.getData());
  }

  public show(id: number): Observable<IStudent> {
    return of(this.studentMock.show(id));
  }

  public store(name: string, email: string): Observable<boolean> {
    const student: IStudent = {
      id: Date.now(),
      name,
      email,
    };

    this.studentMock.store(student);

    return of(true);
  }

  public update(id: number, name: string, email: string): Observable<IStudent> {
    const student = {
      id,
      name,
      email
    } as IStudent;

    return of(this.studentMock.update(id, student));
  }
}
