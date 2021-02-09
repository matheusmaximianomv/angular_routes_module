import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  LoginComponent,
  HomeComponent,
  CoursesComponent,
  CoursesDetailsComponent,
  CoursesNotFoundComponent,
} from 'src/app/modules';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'courses/not-found', component: CoursesNotFoundComponent },
  { path: 'courses/:id', component: CoursesDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
