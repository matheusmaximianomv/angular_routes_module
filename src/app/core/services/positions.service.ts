import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { IPosition } from '../../shared/models';
import { PositionMock } from '../../shared/mocks';

@Injectable({
  providedIn: 'root',
})
export class PositionsService {
  private positionMock: PositionMock = new PositionMock();

  constructor() {}

  public getPositions(): Observable<Array<IPosition>> {
    return of(this.positionMock.getData());
  }
}
