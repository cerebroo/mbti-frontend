import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SurveyComponent} from './modules/app/components/survey/survey.component';
import {ResultComponent} from './modules/app/components/result/result.component';
import {NotFoundComponent} from './modules/app/components/not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    component: SurveyComponent,
  },
  {
    path: 'result/:id',
    component: ResultComponent,
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
