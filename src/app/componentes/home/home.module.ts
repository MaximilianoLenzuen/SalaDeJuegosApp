import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { ChatComponent } from '../chat/chat.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [HomeComponent,ChatComponent],
  imports: [CommonModule, HomeRoutingModule,FormsModule],
  exports: [HomeComponent],
  providers: [],
  bootstrap: [HomeComponent]
})

export class HomeModule { }
