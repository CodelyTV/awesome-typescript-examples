type CourseStatus = "archived" | "active";

export interface Course {
  name: string;
  status: "archived" | "active";
}

type GroupuedCoursesByStatus = Record<CourseStatus, Course[]>;

export function groupByStatus(courses: Course[]): GroupuedCoursesByStatus {
  const grouped: Record<CourseStatus, Course[]> = {
    active: [],
    archived: [],
  };

  courses.forEach((course) => {
    grouped[course.status].push(course);
  });

  return grouped;
}
