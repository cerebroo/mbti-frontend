import {Question} from '../modules/core/models/question.model';
import {SurveyResult} from '../modules/core/models/survey-result.model';

export const dummyQuestionsArray: Question[] = [
  {
    id: 1,
    question: 'You consider yourself more practical than creative',
    sort_order: 1,
  },
  {
    id: 2,
    question: 'You often spend time exploring unrealistic and impractical yet intriguing ideas',
    sort_order: 3,
  },
  {
    id: 3,
    question: 'You consider yourself more practical than creative',
    sort_order: 2,
  },
  {
    id: 4,
    question: 'You often spend time exploring unrealistic and impractical yet intriguing ideas',
    sort_order: 4,
  },
  {
    id: 5,
    question: 'You consider yourself more practical than creative',
    sort_order: 6,
  },
  {
    id: 6,
    question: 'You often spend time exploring unrealistic and impractical yet intriguing ideas',
    sort_order: 5,
  },
];

export const dummyResult: SurveyResult = {
  token: 'qwerty123',
  conclusion: {
    EI: 'E',
    SN: 'S',
    TF: 'T',
    JP: 'J'
  },
  created_at: '2019/07/17 16:25:53'
};
