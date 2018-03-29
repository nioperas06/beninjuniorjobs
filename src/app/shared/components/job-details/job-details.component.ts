import { Component, OnInit, Input } from '@angular/core';
import { ShareButtons } from '@ngx-share/core';
import { Job } from '../../../core';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {
  @Input() job: Job;

  constructor(public share: ShareButtons) { }

  ngOnInit() {
  }

}
