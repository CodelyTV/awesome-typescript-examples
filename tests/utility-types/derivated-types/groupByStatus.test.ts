import {
  Course,
  groupByStatus,
} from "../../../src/utility-types/derivated-types/groupByStatus";

describe("groupByStatus", () => {
  it("group courses by status", () => {
    const activeCourse: Course = {
      name: "TypeScript Avanzado",
      status: "active",
    };

    const archivedCourses: Course = {
      name: "TypeScript no tan Avanzado",
      status: "archived",
    };

    const groupedCourses = groupByStatus([activeCourse, archivedCourses]);

    expect(groupedCourses.active[0]).toBe(activeCourse);
    expect(groupedCourses.archived[0]).toBe(archivedCourses);
  });
});
