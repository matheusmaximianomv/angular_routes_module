import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentsComponent } from './students.component';
import { StudentsDetailsComponent } from './students-details/students-details.component';
import { StudentsFormComponent } from './students-form/students-form.component';

import { StudentsGuard } from 'src/app/core';

const routesStudents: Routes = [
  {
    path: '',
    component: StudentsComponent,
    canActivateChild: [StudentsGuard],
    children: [
      { path: 'new', component: StudentsFormComponent },
      { path: ':id', component: StudentsDetailsComponent },
      { path: ':id/edit', component: StudentsFormComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routesStudents)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
