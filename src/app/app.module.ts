import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { CoreModule } from './core';
import { ModulesModule } from './modules';
import { SharedModule } from './shared';
import { ShareModule } from '@ngx-share/core';
import { RecaptchaModule } from 'ng-recaptcha';
import { CustomFormsModule } from 'ng2-validation';
import { TruncateModule } from 'ng2-truncate';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    CoreModule,
    ModulesModule,
    SharedModule,
    ShareModule.forRoot(),
    RecaptchaModule.forRoot(),
    CustomFormsModule,
    TruncateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
