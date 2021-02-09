import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';

import { CoursesComponent } from './courses.component';
import { CoursesDetailsComponent } from './courses-details/courses-details.component';
import { CoursesNotFoundComponent } from './courses-not-found/courses-not-found.component';

@NgModule({
  declarations: [
    CoursesComponent,
    CoursesDetailsComponent,
    CoursesNotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
  ],
  exports: [
    CoursesComponent,
    CoursesDetailsComponent,
    CoursesNotFoundComponent
  ]
})
export class CoursesModule { }
