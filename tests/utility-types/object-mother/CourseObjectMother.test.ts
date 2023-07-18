import { CourseObjectMother } from "../../../src/utility-types/object-mothers/CourseObjectMother";

describe("CourseObjectMother", () => {
  it("Has properties defined", () => {
    const course = CourseObjectMother.create();

    expect(course.id).toBeDefined();
    expect(course.title).toBeDefined();
    expect(course.slug).toBeDefined();
  });

  it("Has specified title", () => {
    const expectedName = "TypeScript avanzado";
    const course = CourseObjectMother.create({ title: expectedName });

    expect(course.title).toBe(expectedName);
  });
});
