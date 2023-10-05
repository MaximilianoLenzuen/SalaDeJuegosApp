import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro.component';
import { RegistroRoutingModule } from './registro-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [RegistroComponent],
  imports: [CommonModule, RegistroRoutingModule,
    FormsModule,],
  exports: [RegistroComponent],
  providers: [],
  bootstrap: [RegistroComponent]
})

export class RegistroModule { }
