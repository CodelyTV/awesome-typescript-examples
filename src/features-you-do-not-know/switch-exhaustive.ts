export const enum CourseCategory {
  FRONTEND,
  BACKEND,
  BEST_PRACTICES,
}

const frontendCourseCategory = CourseCategory.FRONTEND;

function assertNever(value: never) {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
}

function print(courseCategory: CourseCategory) {
  switch (courseCategory) {
    case CourseCategory.FRONTEND:
      return "This is the frontend course category";
    case CourseCategory.BACKEND:
      return "This is the backend course category";
    // If you remove this case it will throw a compile time error
    case CourseCategory.BEST_PRACTICES:
      return "This is the backend course category";
    default:
      assertNever(courseCategory);
  }
}

print(frontendCourseCategory);
