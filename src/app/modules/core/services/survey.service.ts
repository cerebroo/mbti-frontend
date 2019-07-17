import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {questionsArray} from '../../../misc/dummy.data';
import {Question} from '../models/question.model';

@Injectable()
export class SurveyService {

  getQuestions(): Observable<Question[]> {
    return of(questionsArray).pipe(delay(1000));
  }
}
