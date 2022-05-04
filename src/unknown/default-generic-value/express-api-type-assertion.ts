import express from "express";

const app = express();

app.post("/api/courses/enroll", async (req, res) => {
  setTimeout(() => {
    const { userId, courseId } = req.body as {
      userId: string;
      courseId: string;
    };

    console.log(`User ${userId} is enrolled in course ${courseId}`);

    res.status(200).send();
  }, 500);
});
