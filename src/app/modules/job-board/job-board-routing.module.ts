import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddJobComponent } from './pages/add-job/add-job.component';
import { SendEmailComponent } from './pages/send-email/send-email.component';

const routes: Routes = [
  { path: 'new-job', component: AddJobComponent },
  { path: 'new-quote', component: SendEmailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobBoardRoutingModule { }
