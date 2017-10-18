import { NgModule } from '@angular/core';
import { JobsService } from './jobs.service';

@NgModule({
  imports: [],
  exports : [],
  declarations: [],
  providers: []
})
export class ServicesModule{
  static forRoot() {
    return {
      ngModule: ServicesModule,
      providers: [
        JobsService
      ]
    }
  }
}


export {
  JobsService
}
