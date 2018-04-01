import { ModelInterface } from './model.interface';

export class Quote implements ModelInterface {

  id: number;
  name: string;
  email: string;
  phone: string;
  description: string;

  constructor(attrs: any = null) {
    if (attrs) {
      this.build(attrs);
    }
  }

  build(attrs: any): void {
    this.id = attrs.id;
    this.name = attrs.name;
    this.email = attrs.email;
    this.phone = attrs.phone;
    this.description = attrs.description;
  }

  toJson(): Object {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      phone: this.phone,
      description: this.description
    };
  }
}
