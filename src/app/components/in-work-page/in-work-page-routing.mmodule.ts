import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InWorkPageComponent } from './in-work-page.component';

const routes: Routes = [
  {
    path: '',
    component: InWorkPageComponent
  }
];

@NgModule( {
  imports: [RouterModule.forChild( routes )],
  exports: [RouterModule]
} )
export class InWorkPageRoutingModule {}