// eslint-disable-next-line @typescript-eslint/no-unused-vars
function apparentlyUnnecessaryFunction(input: never) {
  console.log("This point could not be reached");
}

// 🧨 Invalid usages:
apparentlyUnnecessaryFunction();
apparentlyUnnecessaryFunction(true);

// 👍 Valid usages:
declare let randomThing: never;
apparentlyUnnecessaryFunction(randomThing);

// 💡 This will be useful while talking about narrowing and exhaustive checks
// For now, lets see how further we can go with this concept:

type VideoStep = {
  duration: number;
  questions?: never;
};

type QuizzStep = {
  questions: [];
  duration?: never;
};

declare function estimateDuration(step: VideoStep | QuizzStep): void;

// 🧨 Invalid usage:
const invalidStep = { duration: 123, questions: [] };
estimateDuration(invalidStep);

// 🧠 SOLID Open/Closed Principle?
