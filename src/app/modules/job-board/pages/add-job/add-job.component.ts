import { Component, OnInit } from '@angular/core';
import { Job } from '../../../../core';
import { JobService } from '../../../../core/services';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {
  job: Job = new Job;
  loading = false;
  jobSent = false;
  email = '';

  constructor(
    private jobService: JobService
  ) { }

  ngOnInit() {
  }

  register(form: any) {
    if (!form.valid) {
      return;
    }
    this.loading = true;
    this.jobService.create(this.job)
      .finally(() => {
        this.loading = false;
      })
      .subscribe(
        (response) => {
          this.email = response.email;
          this.jobSent = true;
        },
        (error) => {
        }
      );
  }

}
