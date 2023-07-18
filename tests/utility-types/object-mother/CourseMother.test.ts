import { CourseMother } from "../../../src/utility-types/object-mothers/CourseMother";

describe("CourseMother", () => {
  it("Has properties defined", () => {
    const course = CourseMother.create();

    expect(course.id).toBeDefined();
    expect(course.title).toBeDefined();
    expect(course.slug).toBeDefined();
  });

  it("Has specified title", () => {
    const expectedName = "TypeScript avanzado";
    const course = CourseMother.create({ title: expectedName });

    expect(course.title.value).toBe(expectedName);
  });
});
