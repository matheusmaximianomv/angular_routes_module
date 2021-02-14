import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  LoginComponent,
  HomeComponent,
} from 'src/app/modules';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'courses',
    loadChildren: './modules/pages/courses/courses.module#CoursesModule',
  },
  {
    path: 'students',
    loadChildren: './modules/pages/students/students.module#StudentsModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
