import { CourseResponse } from "../../../src/features-you-do-not-know/useful-utility-types/application/CourseResponse";
import { Course } from "../../../src/features-you-do-not-know/useful-utility-types/domain/Course";
import { CourseId } from "../../../src/features-you-do-not-know/useful-utility-types/domain/CourseId";
import { CourseSlug } from "../../../src/features-you-do-not-know/useful-utility-types/domain/CourseSlug";
import { CourseTitle } from "../../../src/features-you-do-not-know/useful-utility-types/domain/CourseTitle";

describe("CourseResponse", () => {
  it("validates the constructor argument type based on the Course entity and the Primitives utility type", () => {
    const randomCourseId = new CourseId("192743ca-d13e-435f-8d2b-8bd8140221ac");
    const randomCourseTitle = new CourseTitle("Advanced TypeScript");
    const randomCourseSlug = new CourseSlug("advanced-typescript");
    const randomCourse = new Course(
      randomCourseId,
      randomCourseTitle,
      randomCourseSlug
    );
    const randomCourseResponse = new CourseResponse(
      randomCourse.toPrimitives()
    );

    const expectedPrimitives = {
      id: "192743ca-d13e-435f-8d2b-8bd8140221ac",
      slug: "advanced-typescript",
      title: "Advanced TypeScript",
    };

    const actualPrimitives = randomCourseResponse.toPrimitives();

    expect(actualPrimitives).toEqual(expectedPrimitives);
  });
});
