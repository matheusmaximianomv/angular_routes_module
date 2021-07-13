import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DataDrivenComponent } from './data-driven.component';
import { DataDrivenRoutingModule } from './data-driven-routing.module';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [DataDrivenComponent],
  imports: [
    CommonModule,
    DataDrivenRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class DataDrivenModule { }
