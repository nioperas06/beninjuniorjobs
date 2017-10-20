import { Injectable } from '@angular/core';
import { Job } from './../models/job'
import { JOBS } from './../data/mock-jobs';

@Injectable()
export class JobService {

  constructor() { }

  getJobs(): Promise<Job[]>{
    return Promise.resolve(JOBS);
  }

}
