import { Pipe, PipeTransform } from '@angular/core';
import { Job } from '../../core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(values) {
    if (values) {
      return values.reverse();
    }
  }

}
