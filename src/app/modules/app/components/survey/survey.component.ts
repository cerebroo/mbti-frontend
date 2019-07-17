import { Component, OnInit } from '@angular/core';
import {SurveyService} from '../../../core/services/survey.service';
import {AlertService} from '../../../core/services/alert.service';

@Component({
  selector: 'mb-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {

  constructor(private surveyService: SurveyService, private alertService: AlertService) { }

  ngOnInit() {
    this.surveyService.getQuestions().subscribe(questions => {
      this.alertService.success('questions fetched successfully');
      console.log(questions);
    });
  }
}
