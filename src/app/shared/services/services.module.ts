import { NgModule } from '@angular/core';
import { JobService } from './job.service';

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
        JobService
      ]
    }
  }
}


export {
  JobService
}
