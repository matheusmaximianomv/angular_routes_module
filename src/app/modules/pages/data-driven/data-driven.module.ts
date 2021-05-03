import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataDrivenComponent } from './data-driven.component';
import { DataDrivenRoutingModule } from './data-driven-routing.module';

@NgModule({
  declarations: [DataDrivenComponent],
  imports: [
    CommonModule,
    DataDrivenRoutingModule,
  ]
})
export class DataDrivenModule { }
