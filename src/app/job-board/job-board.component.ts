import { Component, OnInit } from '@angular/core';
import { Job } from './../shared/models/job';
import { JobService } from './../shared/services/services.module'

@Component({
  selector: 'app-job-board',
  templateUrl: './job-board.component.html',
  styleUrls: ['./job-board.component.css']
})
export class JobBoardComponent implements OnInit {
  jobs: Job[] = [];
  constructor(private jobService: JobService) { }

  ngOnInit() {
    this.jobService.getJobs().then(
      jobs => this.jobs = jobs
    );
  }

}
