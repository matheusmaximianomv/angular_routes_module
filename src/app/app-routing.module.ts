import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  LoginComponent,
  HomeComponent,
  NotFoundComponent
} from 'src/app/modules';

import {
  AuthGuard,
  SkipLoginGuard,
} from 'src/app/core';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
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
    canLoad: [AuthGuard],
  },
  {
    path: 'template-formulary',
    loadChildren: './modules/pages/template-driven/template-driven.module#TemplateDrivenModule',
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
  },
  {
    path: 'data-formulary',
    loadChildren: './modules/pages/data-driven/data-driven.module#DataDrivenModule',
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
  },
  {
    path: '**',
    component: NotFoundComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        useHash: true,
      }
    )
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
