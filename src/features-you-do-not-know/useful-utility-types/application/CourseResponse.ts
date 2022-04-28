import { Course } from "../domain/Course";
import type { Primitives } from "../shared/domain/Primitives";

export class CourseResponse {
  constructor(readonly params: Primitives<Course>) {}

  toPrimitives(): Primitives<Course> {
    return this.params;
  }
}
