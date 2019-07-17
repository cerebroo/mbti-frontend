import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatRadioModule, MatSnackBarModule,
} from '@angular/material';
import { SurveyComponent } from './app/components/survey/survey.component';
import { ResultComponent } from './app/components/result/result.component';
import { NotFoundComponent } from './app/components/not-found/not-found.component';

const modules = [
  MatButtonModule,
  MatRadioModule,
  MatSnackBarModule
];

@NgModule({
  imports: modules,
  exports: modules,
  declarations: [SurveyComponent, ResultComponent, NotFoundComponent],
})
export class MaterialModule {
}
