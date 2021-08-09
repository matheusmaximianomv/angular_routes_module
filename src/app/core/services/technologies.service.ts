import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { TechnologiesMock } from '../../shared/mocks';

@Injectable({
  providedIn: 'root',
})
export class TechnologiesService {
  private technologyMock: TechnologiesMock = new TechnologiesMock();

  constructor() {}

  public getTechnologies(): Observable<Array<string>> {
    return of(this.technologyMock.getData());
  }
}
