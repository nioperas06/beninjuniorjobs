import { Injectable } from '@angular/core';
import { Job } from './../models';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Config } from './../../app.configs';

@Injectable()
export class JobService {

  constructor(private http: HttpClient) { }

  create(job: Job): Observable<any> {
    return this.http
      .post(Config.toApiUrl('jobs'), job.toJson());
  }

  all(filters: any = {}): Observable<Job[]> {
    return this.http
      .get(Config.toApiUrl('jobs'))
      .map((data: any) => data.map(j => new Job(j)));
  }
}
