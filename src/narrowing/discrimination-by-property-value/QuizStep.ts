export class QuizStep {
  readonly type = "quiz";
  constructor(readonly name: string, readonly questions: string[]) {}
}
