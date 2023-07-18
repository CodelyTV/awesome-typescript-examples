type CourseStatus = "archived" | "active";

export interface Course {
  name: string;
  status: "archived" | "active";
}

export function groupByStatus(
  courses: Course[]
): Record<CourseStatus, Course[]> {
  const grouped: Record<CourseStatus, Course[]> = {
    active: [],
    archived: [],
  };

  courses.forEach((course) => {
    grouped[course.status].push(course);
  });

  return grouped;
}
