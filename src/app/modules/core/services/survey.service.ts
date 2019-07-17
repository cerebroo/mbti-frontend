import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Question} from '../models/question.model';
import {SurveyResult} from '../models/survey-result.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {map} from 'rxjs/internal/operators';

@Injectable()
export class SurveyService {

  baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  getQuestions(): Observable<Question[]> {
    return this.http.get<{data: Question[]}>(this.baseUrl + '/questions').pipe(map(response => response.data));
  }

  submit(data: { responses: { [questionId: number]: number }, email: string }): Observable<SurveyResult> {
    return this.http.post<{data: SurveyResult}>(this.baseUrl + '/submit', data).pipe(map(response => response.data));
  }

  getResult(token: string): Observable<SurveyResult> {
    return this.http.get<{data: SurveyResult}>(this.baseUrl + '/submissions/' + token).pipe(map(response => response.data));
  }
}
