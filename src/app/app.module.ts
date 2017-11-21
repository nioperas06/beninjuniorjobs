import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedComponentsModule } from "./shared/components/shared-components.module";

import { ServicesModule } from './shared/services/services.module';
import { JobComponent } from './job/job.component';
import { JobBoardComponent } from './job-board/job-board.component';

import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { ShareButtonsModule } from 'ngx-sharebuttons';

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
    SharedComponentsModule,
    HttpClientModule,             // (Required) for share counts
    HttpClientJsonpModule,        // (Optional) for linkedIn and tumblr share counts
    ShareButtonsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
