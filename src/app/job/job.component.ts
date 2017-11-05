import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Job } from './../shared/models/job';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  @Input() job: Job;
  constructor() {
  }

  ngOnInit() {
  }

}
