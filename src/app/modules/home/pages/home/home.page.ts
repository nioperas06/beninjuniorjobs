import { Component, OnInit } from '@angular/core';
import { Job } from '../../../../core';
import { JobService } from '../../../../core/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})

export class HomePage implements OnInit {
  jobs: Array<Job> = [];

  constructor(
    private jobService: JobService
  ) {
    this.loadJobs();
  }

  loadJobs() {
    this.jobService.all()
      .subscribe(
        (data) => {
          this.jobs = data;
          console.log(this.jobs);
        },
        (err) => {
          console.log(err);
        }
      );
  }

  ngOnInit() {
  }

}
