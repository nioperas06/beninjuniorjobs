import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomePage } from './pages/home/home.page';
import { CoreModule } from '../../core';
import { SharedModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule,
    SharedModule,
    FormsModule,
  ],
  declarations: [HomePage]
})
export class HomeModule { }
