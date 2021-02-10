import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';

import { CoursesRoutingModule } from './courses-routing.module';

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
    CoursesRoutingModule,
    MatCardModule,
  ],
  exports: [
    CoursesComponent,
    CoursesDetailsComponent,
    CoursesNotFoundComponent
  ]
})
export class CoursesModule { }
