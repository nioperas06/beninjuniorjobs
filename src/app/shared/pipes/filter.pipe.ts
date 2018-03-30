import { Pipe, PipeTransform } from '@angular/core';
import { Job } from '../../core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(jobs: Job[], searchText: string): any[] {
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

}
