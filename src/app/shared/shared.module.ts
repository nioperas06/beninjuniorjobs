import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { ReversePipe } from './pipes/reverse.pipe';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule
  ],
  declarations: [ReversePipe],
  exports: [ ComponentsModule, ReversePipe ]
})
export class SharedModule { }
