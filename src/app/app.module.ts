import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedComponentsModule } from "./shared/components/shared-components.module";

import { ServicesModule } from './shared/services/services.module';
import { JobComponent } from './job/job.component';
import { JobBoardComponent } from './job-board/job-board.component';

@NgModule({
  declarations: [
    AppComponent,
    JobComponent,
    JobBoardComponent,
  ],
  imports: [
    BrowserModule,
    ServicesModule.forRoot(),
    CoreModule,
    SharedComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
