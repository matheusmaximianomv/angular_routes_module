import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  LoginComponent,
  HomeComponent,
} from 'src/app/modules';

import {
  AuthGuard
} from 'src/app/core';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'courses',
    loadChildren: './modules/pages/courses/courses.module#CoursesModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'students',
    loadChildren: './modules/pages/students/students.module#StudentsModule',
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
