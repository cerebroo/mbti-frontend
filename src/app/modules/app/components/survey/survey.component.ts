import {Component, OnInit} from '@angular/core';
import {SurveyService} from '../../../core/services/survey.service';
import {AlertService} from '../../../core/services/alert.service';
import {Question} from '../../../core/models/question.model';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'mb-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {

  questions: Question[];
  loading: boolean;
  submitting: boolean;
  form = new FormGroup({});

  constructor(private surveyService: SurveyService, private alertService: AlertService) {
  }

  ngOnInit() {
    this.loading = true;
    this.surveyService.getQuestions().subscribe(questions => {
      this.loading = false;
      this.questions = questions;
    });
  }

  submit() {
    this.submitting = true;
    this.surveyService.submit().subscribe(data => {
      this.submitting = false;
    });
  }
}
