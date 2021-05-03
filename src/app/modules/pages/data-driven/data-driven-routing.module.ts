import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataDrivenComponent } from './data-driven.component';

const routesDataDriven: Routes = [
  {
    path: '',
    component: DataDrivenComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routesDataDriven)],
  exports: [RouterModule],
})
export class DataDrivenRoutingModule { }
