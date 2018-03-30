import { ModelInterface } from './model.interface';
import * as moment from 'moment';

export class Job implements ModelInterface {

  id: number;
  company: string;
  email: string;
  url: string;
  title: string;
  location: string;
  description: string;
  logo: string;
  created_at: string;

  constructor(attrs: any = null) {
    if (attrs) {
      this.build(attrs);
    }
  }

  build(attrs: any): void {
    this.id = attrs.id;
    this.company = attrs.company;
    this.email = attrs.email;
    this.url = attrs.url;
    this.title = attrs.title;
    this.location = attrs.location;
    this.description = attrs.description;
    this.logo = attrs.logo;
    this.created_at = moment(attrs.created_at).lang('fr').format('LL');
  }

  toJson(): Object {
    return {
      id: this.id,
      company: this.company,
      email: this.email,
      url: this.url,
      title: this.title,
      location: this.location,
      description: this.description
    };
  }
}
