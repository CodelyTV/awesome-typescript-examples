import express, { Request } from "express";

const app = express();

type PostRequest<T = unknown> = Request<void, void, T>;

interface CourseEnrollBody {
  userId: string;
  courseId: string;
}

app.post(
  "/api/courses/enroll",
  async (req: PostRequest<CourseEnrollBody>, res) => {
    setTimeout(() => {
      const { userId, courseId } = req.body;

      console.log(`User ${userId} is enrolled in course ${courseId}`);

      res.status(200).send();
    }, 500);
  }
);
