import { Injectable } from '@angular/core';
import { Quote } from './../models';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Config } from './../../app.configs';

@Injectable()
export class QuoteService {

  constructor(private http: HttpClient) { }

  create(quote: Quote): Observable<any> {
    return this.http
      .post(Config.toApiUrl('quotes'), quote.toJson());
  }

}
