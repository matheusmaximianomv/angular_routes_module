import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

import { Observable, of } from 'rxjs';

import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class SkipLoginGuard implements CanActivate {
  constructor(
    private readonly router: Router,
    private readonly authService: AuthenticationService,
  ) {}

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const userAuthenticated = this.authService.isAuthenticated();

    if (userAuthenticated) {
      this.router.navigate(['/home']);

      return of(false);
    }

    return of(true);

  }
}
