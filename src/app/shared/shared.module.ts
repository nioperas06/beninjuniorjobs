import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule
  ],
  declarations: [FilterPipe],
  exports: [ ComponentsModule, FilterPipe ]
})
export class SharedModule { }
