import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  LoginComponent,
  HomeComponent,
} from 'src/app/modules';

import {
  AuthGuard,
  SkipLoginGuard,
} from 'src/app/core';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [SkipLoginGuard],
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
  {
    path: 'courses',
    loadChildren: './modules/pages/courses/courses.module#CoursesModule',
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
  {
    path: 'students',
    loadChildren: './modules/pages/students/students.module#StudentsModule',
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
