import {
  createQuiz,
  deleteQuiz,
  findQuizForCourse,
  updateQuiz,
} from "./dao.js";

export default function QuizRoutes(app) {
  app.get("/api/courses/:cid/quizzes", async (req, res) => {
    const { cid } = req.params;
    const quizzes = await findQuizForCourse(cid);
    res.json(quizzes);
  });

  app.post("/api/courses/:cid/quizzes", async (req, res) => {
    const { cid } = req.params;
    const newQuiz = {
      ...req.body,
      // course: cid,
      courseId: cid,
    };

    const quiz = await createQuiz(newQuiz);
    res.send(quiz);
  });

  app.put("/api/quizzes/:quizid", async (req, res) => {
    const { quizid } = req.params;
    const status = await updateQuiz(quizid, req.body);
    res.json(status);
  });

  app.delete("/api/quizzes/:quizid", async (req, res) => {
    const status = await deleteQuiz(req.params.quizid);
    res.json(status);
  });
}
