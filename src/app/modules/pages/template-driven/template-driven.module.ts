import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateDrivenComponent } from './template-driven.component';
import { TemplateDrivenRoutingModule } from './template-drive-routing.module';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [TemplateDrivenComponent],
  imports: [
    CommonModule,
    TemplateDrivenRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ]
})
export class TemplateDrivenModule { }
