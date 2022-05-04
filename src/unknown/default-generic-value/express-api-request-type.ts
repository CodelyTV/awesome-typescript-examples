import express, { Request } from "express";

const app = express();

interface CourseEnrollBody {
  userId: string;
  courseId: string;
}

app.post(
  "/api/courses/enroll",
  async (req: Request<void, void, CourseEnrollBody>, res) => {
    setTimeout(() => {
      const { userId, courseId } = req.body;

      console.log(`User ${userId} is enrolled in course ${courseId}`);

      res.status(200).send();
    }, 500);
  }
);
