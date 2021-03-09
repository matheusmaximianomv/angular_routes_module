import { Injectable } from '@angular/core';
import {
    CanActivate,
    CanLoad,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
    Route,
} from '@angular/router';
import { Observable, of } from 'rxjs';

import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

    constructor(
        private readonly authService: AuthenticationService,
        private readonly router: Router,
    ) { }

    private permission(): boolean {
        const userAuthenticated = this.authService.isAuthenticated();

        if (!userAuthenticated) {
            this.router.navigate(['/']);
        }

        return userAuthenticated;
    }

    public canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> {
        return of(this.permission());
    }

    public canLoad(route: Route): Observable<boolean> {
        return of(this.permission());
    }

}
