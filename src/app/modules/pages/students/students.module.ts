import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';

import { StudentsComponent } from './students.component';
import { StudentsFormComponent } from './students-form/students-form.component';
import { StudentsDetailsComponent } from './students-details/students-details.component';

@NgModule({
  imports: [
    CommonModule,
    StudentsRoutingModule,
  ],
  declarations: [
    StudentsComponent,
    StudentsFormComponent,
    StudentsDetailsComponent
  ],
  exports: [
    StudentsComponent
  ],
})
export class StudentsModule { }
