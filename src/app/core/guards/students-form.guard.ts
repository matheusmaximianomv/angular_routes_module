import { Injectable } from '@angular/core';
import {
    CanDeactivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';

import { Observable, of } from 'rxjs';

import { StudentsFormComponent } from 'src/app/modules';

@Injectable({
    providedIn: 'root',
})

export class StudentsFormGuard implements CanDeactivate<StudentsFormComponent> {

    constructor() { }

    public canDeactivate(
        component: StudentsFormComponent,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<boolean> {
        if (component.completedForm) {
            const userConfirm = confirm('Deseja realmente seguir sem salvar?');

            return of(userConfirm);
        }

        return of(true);
    }
}

