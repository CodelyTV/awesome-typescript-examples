import { faker } from "@faker-js/faker";

import { Course } from "../../features-you-do-not-know/useful-utility-types/domain/Course";
import { CourseId } from "../../features-you-do-not-know/useful-utility-types/domain/CourseId";
import { CourseSlug } from "../../features-you-do-not-know/useful-utility-types/domain/CourseSlug";
import { CourseTitle } from "../../features-you-do-not-know/useful-utility-types/domain/CourseTitle";
import { Primitives } from "../../features-you-do-not-know/useful-utility-types/shared/domain/Primitives";

type CoursePartials = Partial<Primitives<Course>>;

export class CourseMother {
  static create(params?: CoursePartials): Course {
    const courseParams: Primitives<Course> = {
      id: faker.string.uuid(),
      slug: faker.string.alpha(10),
      title: faker.string.alpha(20),
      ...params,
    };

    return new Course(
      new CourseId(courseParams.id),
      new CourseTitle(courseParams.title),
      new CourseSlug(courseParams.slug)
    );
  }
}
