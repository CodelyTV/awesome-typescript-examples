import { faker } from "@faker-js/faker";

import { CourseObject } from "./CourseObject";

type CourseObjectPartials = Partial<CourseObject>;

export class CourseObjectMother {
  static create(partialCourse?: CourseObjectPartials): CourseObject {
    const randomCourse: CourseObject = {
      id: faker.string.uuid(),
      slug: faker.string.alpha(10),
      title: faker.string.alpha(20),
    };

    const courseOverridingDefaults = {
      ...randomCourse,
      ...partialCourse,
    };

    return courseOverridingDefaults;
  }
}
