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
  searchText = '';

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
        },
        (err) => {
        }
      );
  }

  onSearchChange(value: string) {
    if (value === '') {
      this.loadJobs();
      return;
    }
    this.jobs = this.search(this.jobs, value);
  }

  search(jobs: Job[], searchText: string): Job[] {
    if (!jobs) {
      return [];
    }
    if (!searchText) {
      return jobs;
    }
    searchText = searchText.toLowerCase();
    return jobs.filter(it => {
      return it.title.toLowerCase().includes(searchText) || it.description.toLowerCase().includes(searchText);
    });
  }

  ngOnInit() {
  }

}
