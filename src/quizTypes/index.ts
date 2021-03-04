export interface QuestionType {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

export interface Quiz {
  question: string;
  answer: string;
  option: string[];
}
