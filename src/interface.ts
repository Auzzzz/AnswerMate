export interface PresentationQuestions {
    questionId: number;
    question: string;
    orderId: number;
    deleteQuestion: (questionId: number) => void;
    updateQuestion: (questionId: number, newQuestion: string) => void;
  }

export interface PresentationActions {
    deleteQuestion: (questionId: number) => void;
    updateQuestion: (questionId: number, newQuestion: string) => void;
}