import {Component, OnInit} from '@angular/core';
import {SurveyService} from '../../../core/services/survey.service';
import {ActivatedRoute} from '@angular/router';
import {map, switchMap} from 'rxjs/internal/operators';
import {SurveyResult} from '../../../core/models/survey-result.model';
import {Inclination} from '../../../shared/components/inclination-bar/inclination';
import {of} from 'rxjs/index';
import {AlertService} from '../../../core/services/alert.service';

@Component({
  selector: 'mb-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  result: SurveyResult;
  loading: boolean;

  get perspectiveType(): string {
    const conclusion = this.result.conclusion;
    return conclusion.EI + conclusion.SN + conclusion.TF + conclusion.JP;
  }

  get eiPerspective(): Inclination {
    return this.result.conclusion.EI === 'E' ? 'right' : 'left';
  }

  get snPerspective(): Inclination {
    return this.result.conclusion.SN === 'N' ? 'right' : 'left';
  }

  get tfPerspective(): Inclination {
    return this.result.conclusion.TF === 'F' ? 'right' : 'left';
  }

  get jpPerspective(): Inclination {
    return this.result.conclusion.JP === 'P' ? 'right' : 'left';
  }

  constructor(private surveyService: SurveyService, private route: ActivatedRoute, private alertService: AlertService) {
  }

  ngOnInit() {
    this.loading = true;
    this.route.params.pipe(map(p => p.token), switchMap(token => {
      const data = sessionStorage.getItem(token);
      if (data) {
        return of(JSON.parse(data));
      }
      return this.surveyService.getResult(token);
    })).subscribe({
      next: result => {
        console.log('Result is ', result);
        this.loading = false;
        this.result = result; // Todo: check why webstorm giving error here but tslint during ng serve working fine
      },
      error: error => {
        console.error(error);
        this.loading = false;
        this.alertService.error('Something went wrong! Will do better error handling later :)');
      }
    });
  }
}
