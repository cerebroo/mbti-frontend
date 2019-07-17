export interface SurveyResult {
  token: string;
  conclusion: {
    EI: 'E' | 'I';
    SN: 'S' | 'N';
    TF: 'T' | 'F';
    JP: 'J' | 'P';
  };
  created_at: string;
}
