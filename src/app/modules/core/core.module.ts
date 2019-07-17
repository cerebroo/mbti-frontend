import {NgModule, Optional, SkipSelf} from '@angular/core';
import {SurveyService} from './services/survey.service';
import {AlertService} from './services/alert.service';
import {MaterialModule} from '../material.module';


@NgModule({
  imports: [
    MaterialModule
  ],
  providers: [
    AlertService,
    SurveyService
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() existing: CoreModule) {
    if (existing) {
      throw new Error('Core Module has already been loaded. Import Core Module only in root module.');
    }
  }
}
