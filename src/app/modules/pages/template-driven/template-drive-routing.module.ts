import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TemplateDrivenComponent } from './template-driven.component';

const routesTemplateDriven: Routes = [
  {
    path: '',
    component: TemplateDrivenComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routesTemplateDriven)],
  exports: [RouterModule],
})
export class TemplateDrivenRoutingModule { }
