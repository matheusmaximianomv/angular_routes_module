import { Injectable } from '@angular/core';
import {
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

import {
  Observable,
  of
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class StudentsGuard implements CanActivateChild {

  constructor() { }

  public canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> {
    return of(true);
  }

}
