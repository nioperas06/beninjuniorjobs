import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddJobComponent } from './pages/add-job/add-job.component';

const routes: Routes = [
  { path: 'new-job', component: AddJobComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobBoardRoutingModule { }
