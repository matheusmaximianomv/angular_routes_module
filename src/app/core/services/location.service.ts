import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IStates } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root',
})
export class LocationService {

  private readonly pathResources: string = 'src/assets';

  constructor(
    private readonly httpClient: HttpClient,
  ) {}

  public getStatesFromBrazillian(): Observable<Array<IStates>> {
    return this.httpClient
      .get<Array<IStates>>(`${this.pathResources}/states.json`);
  }

}
