import { QuizStep } from "./QuizStep";
import { VideoStep } from "./VideoStep";

export function calculateStepDurationInMinutes(step: VideoStep | QuizStep) {
  if ("durationInMillis" in step) {
    return step.durationInMillis / 1000 / 60;
  }

  return step.questions.length * 3;
}
