import { QuizStep } from "./QuizStep";
import { VideoStep } from "./VideoStep";

export function calculateStepPoints(step: VideoStep | QuizStep) {
  if (step.type === "video") {
    return step.durationInMillis / 1000;
  }

  return step.questions.length * 50;
}
