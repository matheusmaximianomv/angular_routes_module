import { Injectable } from '@angular/core';
import {
    Resolve,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
} from '@angular/router';

import { Observable } from 'rxjs';

import { IStudent } from 'src/app/shared';

import { StudentsService } from '../services';

@Injectable({
    providedIn: 'root',
})

export class StudentsDetailsResolver implements Resolve<IStudent> {

    constructor(
        private readonly studentsService: StudentsService,
    ) { }

    public resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<IStudent> {
        const { id } = route.params;

        return this.studentsService.show(+id);
    }
}
