import { CourseMotherWithValueObjects } from "../../../src/utility-types/object-mothers/CourseMotherWithValueObjects";

describe("CourseMotherWithValueObjects", () => {
  it("Has properties defined", () => {
    const course = CourseMotherWithValueObjects.create();

    expect(course.id).toBeDefined();
    expect(course.title).toBeDefined();
    expect(course.slug).toBeDefined();
  });

  it("Has specified title", () => {
    const expectedName = "TypeScript avanzado";
    const course = CourseMotherWithValueObjects.create({ title: expectedName });

    expect(course.title.value).toBe(expectedName);
  });
});
