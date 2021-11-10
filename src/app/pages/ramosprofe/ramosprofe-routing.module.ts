import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RamosprofePage } from './ramosprofe.page';

const routes: Routes = [
  {
    path: '',
    component: RamosprofePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RamosprofePageRoutingModule {}
