import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {dummyQuestionsArray, dummyResult} from '../../../misc/dummy.data';
import {Question} from '../models/question.model';
import {SurveyResult} from '../models/survey-result.model';

@Injectable()
export class SurveyService {

  getQuestions(): Observable<Question[]> {
    return of(dummyQuestionsArray).pipe(delay(1000));
  }

  submit(data: { responses: {[questionId: number]: number}, email: string }): Observable<any> {
    return of(dummyResult).pipe(delay(1000));
  }

  getResult(token: string): Observable<SurveyResult> {
    return of(dummyResult).pipe(delay(1000));
  }
}