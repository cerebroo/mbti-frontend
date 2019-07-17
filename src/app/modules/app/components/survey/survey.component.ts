import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {SurveyService} from '../../../core/services/survey.service';
import {AlertService} from '../../../core/services/alert.service';
import {Question} from '../../../core/models/question.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'mb-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SurveyComponent implements OnInit {

  questions: Question[];
  loading: boolean;
  submitting: boolean;
  submissionAttempted = false;
  form: FormGroup;
  answers: { [id: number]: number } = {};

  get allQuestionsAnswered(): boolean {
    return this.questions.every(q => this.answered(q.id));
  }

  constructor(private surveyService: SurveyService,
              private alertService: AlertService,
              private router: Router,
              private cd: ChangeDetectorRef) {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email])
    });
  }

  ngOnInit() {
    this.loading = true;
    this.surveyService.getQuestions().subscribe({
      next: questions => {
        this.loading = false;
        this.questions = questions;
        this.cd.markForCheck();
      },
      error: error => {
        console.error(error);
        this.loading = false;
        this.alertService.error('Something went wrong! Will do better error handling later :)');
        this.cd.markForCheck();
      }
    });
  }

  onAnswer(questionId: number, answer: number) {
    this.answers[questionId] = answer;
  }

  answered(questionId: number): boolean {
    return !!this.answers[questionId];
  }

  submit() {
    this.submissionAttempted = true;
    if (!this.allQuestionsAnswered) {
      this.alertService.error('Please answer all questions');
      return;
    }

    if (!this.form.valid) {
      this.alertService.error('Please enter a valid email address');
      return;
    }

    this.submitting = true;
    const data = {responses: this.answers, email: this.form.get('email').value};
    this.surveyService.submit(data).subscribe({
      next: response => {
        // ideally should be put in redux store but saving time here
        sessionStorage.setItem(response.token, JSON.stringify(response));
        this.submitting = false;
        this.router.navigate(['result', response.token]);
        this.cd.markForCheck();
      },
      error: error => {
        console.error(error);
        this.submitting = false;
        this.alertService.error('Something went wrong! Will do better error handling later :)');
        this.cd.markForCheck();
      }
    });
  }
}
