import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { JobBoardRoutingModule } from './job-board-routing.module';
import { AddJobComponent } from './pages/add-job/add-job.component';
import { CoreModule } from '../../core';
import { CustomFormsModule } from 'ng2-validation';
import { SendEmailComponent } from './pages/send-email/send-email.component';

@NgModule({
  imports: [
    CommonModule,
    JobBoardRoutingModule,
    CoreModule,
    CustomFormsModule,
    FormsModule
  ],
  declarations: [AddJobComponent, SendEmailComponent]
})
export class JobBoardModule { }
