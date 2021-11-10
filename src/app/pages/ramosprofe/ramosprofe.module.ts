import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RamosprofePageRoutingModule } from './ramosprofe-routing.module';

import { RamosprofePage } from './ramosprofe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RamosprofePageRoutingModule
  ],
  declarations: [RamosprofePage]
})
export class RamosprofePageModule {}
