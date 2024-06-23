import {
  findStudentQuizRecordForQuiz,
  findStudentQuizRecordByStudent,
} from "./dao.js";

export default function StudentQuizRecordsRoutes(app) {
  // app.get(
  //   "/api/quizzes/:quizid/studentquizrecords/:attemptNumber",
  //   async (req, res) => {
  //     const { quizid, attemptNumber } = req.params;
  //     const studentQuizRecords = await findStudentQuizRecordForQuiz(
  //       quizid,
  //       attemptNumber
  //     );
  //     res.json(studentQuizRecords);
  //   }
  // );

  app.get(
    "/api/quizzes/:quizid/studentquizrecords/:attemptNumber/:studentId",
    async (req, res) => {
      const { quizid, attemptNumber, studentId } = req.params;
      const studentQuizRecords = await findStudentQuizRecordByStudent(
        studentId,
        quizid,
        attemptNumber
      );
      res.json(studentQuizRecords);
    }
  );

  app.get(
    "/api/quizzes/:quizid/studentquizrecords/:attemptNumber",
    async (req, res) => {
      const { quizid, attemptNumber } = req.params;
      const studentId = req.session.currentUser._id;
      const studentQuizRecords = await findStudentQuizRecordByStudent(
        studentId,
        quizid,
        attemptNumber
      );
      res.json(studentQuizRecords);
    }
  );
}
