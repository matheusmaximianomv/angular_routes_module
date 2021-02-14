import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesComponent } from './courses.component';
import { CoursesDetailsComponent } from './courses-details/courses-details.component';
import { CoursesNotFoundComponent } from './courses-not-found/courses-not-found.component';

const coursesRoutes: Routes = [
  { path: '', component: CoursesComponent },
  { path: 'not-found', component: CoursesNotFoundComponent },
  { path: ':id', component: CoursesDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(coursesRoutes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
