import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePage } from './pages/home/home.page';
import { CoreModule } from '../../core';
import { SharedModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule,
    SharedModule
  ],
  declarations: [HomePage]
})
export class HomeModule { }
