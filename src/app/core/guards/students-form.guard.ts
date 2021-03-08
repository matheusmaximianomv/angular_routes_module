import { Injectable } from '@angular/core';
import {
    CanDeactivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';

import { Observable, of } from 'rxjs';

import { IFormCanDeactive } from 'src/app/shared';

@Injectable({
    providedIn: 'root',
})

export class StudentsFormGuard implements CanDeactivate<IFormCanDeactive> {

    constructor() { }

    public canDeactivate(
        component: IFormCanDeactive,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<boolean> {
        if (component.completedForm()) {
            const userConfirm = confirm('Deseja realmente seguir sem salvar?');

            return of(userConfirm);
        }

        return of(true);
    }
}

