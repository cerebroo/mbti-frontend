import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatRadioModule,
} from '@angular/material';
import { SurveyComponent } from './app/components/survey/survey.component';
import { ResultComponent } from './app/components/result/result.component';
import { NotFoundComponent } from './app/components/not-found/not-found.component';

const modules = [
  MatButtonModule,
  MatRadioModule
];

@NgModule({
  imports: modules,
  exports: modules,
  declarations: [SurveyComponent, ResultComponent, NotFoundComponent],
})
export class MaterialModule {
}
