// https://www.typescriptlang.org/play?#code/MYewdgzgLgBApmArgWxgYRIgThOaCGUcA5iFgJ4wDeAsAFAwwBiASgPIByAKgKIcAiAGnqMAQgEE0AaT5CRMUTwDKXAPoAFFpK4BJNMuF0AvvXqhIsAGZZwRMABMM2XASKkKMALzpMOPIRIycgA6Vk5eAQBuUzpLRDBgKABLcBgABywksCgAClBnfzcggC4fAtdAigBKankIAHckqGAACxg83xcA93Ia2gZGGGB8XDK-Cp7Q9m5ZYvlBmCw4KGwwGAAiLhakiBgdmCgWuBhrWwR7Ic7j4aKKdeiBxns4S3xEABsoOcfBpZWsNbrDggE42bLnS4FIbdIL3eQmYwxDJZXKncEOJzjGHVB5AA

enum StepType {
  QUIZ,
  VIDEO,
  CHALLENGUE,
}

const videoStepType = StepType.VIDEO;

function print(stepType: StepType) {
  switch (stepType) {
    case StepType.QUIZ:
      return "This is a quiz step";
    default:
      return "No quiz step";
  }
}

print(videoStepType);
