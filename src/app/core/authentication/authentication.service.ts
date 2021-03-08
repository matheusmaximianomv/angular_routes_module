import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';

import { IUser, UserMock } from 'src/app/shared';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    public userAuthenticated: boolean;
    public displayNavBarEmitter = new EventEmitter<boolean>();

    constructor(
        private readonly router: Router,
    ) { }

    public login(user: IUser): Observable<void> {

        const { email, password } = user;
        const mockUser = new UserMock();

        const userExists = mockUser.show(email);

        if (userExists && userExists.password === password) {
            this.userAuthenticated = true;

            localStorage.setItem('@token', JSON.stringify({ email, password }));

            this.displayNavBarEmitter.emit(true);

            this.router.navigate(['/home']);

            return of();
        }

        this.userAuthenticated = false;

        this.displayNavBarEmitter.emit(false);

        return of();
    }

    public isAuthenticated(): boolean {
        const token = localStorage.getItem('@token');

        if (token) {
            this.displayNavBarEmitter.emit(true);

            return true;
        }

        return false;
    }
}
