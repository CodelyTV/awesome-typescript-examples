export const enum CourseCategory {
  FRONTEND,
  BACKEND,
  BEST_PRACTICES,
}

const frontendCourseCategory = CourseCategory.FRONTEND;

export function print(courseCategory: CourseCategory) {
  switch (courseCategory) {
    case CourseCategory.FRONTEND:
      return "This is the frontend course category";
    case CourseCategory.BACKEND:
      return "This is the backend course category";
    // If you remove this case it will throw a compile time error
    case CourseCategory.BEST_PRACTICES:
      return "This is the backend course category";
    default:
      // If narrowed type is not never we will get a type error
      assertNever(courseCategory);
  }
}

function assertNever(value: never) {
  // We will also get an error in runtime becase we are throwing an exception in assertNever method
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
}

print(frontendCourseCategory);
