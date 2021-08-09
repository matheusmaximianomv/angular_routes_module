import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IStates, IViaCEPAddress } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private readonly pathResources: string = '/assets';

  constructor(private readonly httpClient: HttpClient) { }

  public getStatesFromBrazillian(): Observable<Array<IStates>> {
    return this.httpClient
      .get<Array<IStates>>(`${this.pathResources}/states.json`);
  }

  public getInfoByZipCode(cep: string): Observable<IViaCEPAddress> {
    return this.httpClient
      .get<IViaCEPAddress>(`//viacep.com.br/ws/${cep}/json`);
  }
}
