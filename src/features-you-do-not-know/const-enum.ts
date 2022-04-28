// https://www.typescriptlang.org/play?&removeComments=true#code/MYewdgzgLgBApmArgWxgYRIgThOaCGUcA5iFgJ4wDeAsAFAwwBiASgPIByAKgKIcAiAGnqMAQgEE0AaT5CRMUTwDKXAPoAFFpK4BJNMuF0AvvXqhIsAGZZwRMABMM2XASKkKMALzpMOPIRIycgA6Vk5eAQBuUzpLRDBgKABLcBgABywksCgAClBnfzcggC4fAtdAigBKankIAHckqGAACxg83xcA93Ia2gZGGGB8XDK-Cp7Q9m5ZYvlBmCw4KGwwGAAiLhakiBgdmCgWuBhrWwR7Ic7j4aKKdeiBxns4S3xEABsoOcfBpZWsNbrDggE42bLnS4FIbdIL3eQmYwxDJZXKncEOJzjGHVB5AA
const enum CourseCategory {
  FRONTEND,
  BACKEND,
  BEST_PRACTICES,
}

const frontendCourseCategory = CourseCategory.FRONTEND;

function print(courseCategory: CourseCategory) {
  switch (courseCategory) {
    case CourseCategory.FRONTEND:
      return "This is the frontend course category";
    default:
      return "No frontend course category";
  }
}

print(frontendCourseCategory);
