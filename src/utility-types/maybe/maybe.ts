export type Course = {
  name: string;
};

type Maybe<T> = T | undefined;

function tryCreateCourse(): Maybe<Course> {
  // Create course with default name
  throw new Error("Not implemented");
}

const course = tryCreateCourse();

// @ts-expect-error course have to be narrowed
course.name;
