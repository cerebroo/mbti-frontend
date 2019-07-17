import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './modules/material.module';
import {CoreModule} from './modules/core/core.module';
import {SharedModule} from './modules/shared/shared.module';
import {SurveyComponent} from './modules/app/components/survey/survey.component';
import {ResultComponent} from './modules/app/components/result/result.component';
import {NotFoundComponent} from './modules/app/components/not-found/not-found.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    ResultComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    CoreModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
