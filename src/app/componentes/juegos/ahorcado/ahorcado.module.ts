import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AhorcadoRoutingModule } from './ahorcado-routing.module';
import { AhorcadoComponent } from './ahorcado.component';


@NgModule({
  declarations: [AhorcadoComponent],
  imports: [
    CommonModule,
    AhorcadoRoutingModule
  ],
  providers: [],
  exports: [AhorcadoComponent],
  bootstrap: [AhorcadoComponent]
})
export class AhorcadoModule { }
