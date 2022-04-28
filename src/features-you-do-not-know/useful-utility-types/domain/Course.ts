import type { Primitives } from "../shared/domain/Primitives";
import { CourseId } from "./CourseId";
import { CourseSlug } from "./CourseSlug";
import { CourseTitle } from "./CourseTitle";

export class Course {
  constructor(
    readonly id: CourseId,
    readonly title: CourseTitle,
    readonly slug: CourseSlug
  ) {}

  toPrimitives(): Primitives<Course> {
    return {
      id: this.id.value,
      title: this.title.value,
      slug: this.slug.value,
    };
  }
}
