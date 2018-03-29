import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { JobBoardModule } from './job-board/job-board.module';

@NgModule({
  imports: [
    CommonModule,
    HomeModule,
    JobBoardModule
  ],
  declarations: []
})
export class ModulesModule { }
