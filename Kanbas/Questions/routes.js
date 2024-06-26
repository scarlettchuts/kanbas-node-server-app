import {
  createQuestion,
  deleteQuestion,
  findQuestionForQuiz,
  updateQuestion,
} from "./dao.js";

export default function QuestionRoutes(app) {
  app.get("/api/quizzes/:quizid/questions", async (req, res) => {
    const { quizid } = req.params;
    const questions = await findQuestionForQuiz(quizid);
    res.json(questions);
  });

  app.post("/api/courses/:cid/quizzes/:quizid/questions", async (req, res) => {
    const { cid, quizid } = req.params;

    const newQuestion = {
      ...req.body,
      course: cid,
      quizId: quizid,
    };

    const question = await createQuestion(newQuestion);
    res.send(question);
  });

  app.put("/api/quizzes/:quizid/questions/:questionid", async (req, res) => {
    const { questionid } = req.params;
    const status = await updateQuestion(questionid, req.body);
    res.json(status);
  });

  app.delete("/api/quizzes/:quizid/questions/:questionid", async (req, res) => {
    const status = await deleteQuestion(req.params.questionid);
    res.json(status);
  });
}
