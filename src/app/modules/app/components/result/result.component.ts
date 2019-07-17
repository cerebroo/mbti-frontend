import {Component, OnInit} from '@angular/core';
import {SurveyService} from '../../../core/services/survey.service';
import {ActivatedRoute} from '@angular/router';
import {map, switchMap} from 'rxjs/internal/operators';
import {SurveyResult} from '../../../core/models/survey-result.model';
import {Inclination} from '../../../shared/components/inclination-bar/inclination';

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

  constructor(private surveyService: SurveyService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.loading = true;
    this.route.params.pipe(map(p => p.token), switchMap(token => {
      console.log('Token is ' + token);
      return this.surveyService.getResult(token);
    })).subscribe(result => {
      console.log('Result is ', result);
      this.loading = false;
      this.result = result; // Todo: check why webstorm (tsling) giving error here but tslint during ng serve working fine
    });
  }

  getEIPerspective() {

  }
}
