import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobDetailsComponent } from './job-details/job-details.component';
import { TruncateModule } from 'ng2-truncate';

@NgModule({
  imports: [
    CommonModule,
    TruncateModule
  ],
  declarations: [JobDetailsComponent],
  exports: [JobDetailsComponent]
})
export class ComponentsModule { }
