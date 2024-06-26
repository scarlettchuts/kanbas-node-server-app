import {
  findStudentQuizRecordByStudent,
  createStudentQuizRecord,
} from "./dao.js";

export default function StudentQuizRecordsRoutes(app) {
  app.get("/api/quizzes/:quizid/studentquizrecords", async (req, res) => {
    const { quizid } = req.params;
    const studentId = req.session.currentUser._id;
    const studentQuizRecords = await findStudentQuizRecordByStudent(
      studentId,
      quizid
    );
    res.json(studentQuizRecords);
  });

  app.post("/api/quizzes/:quizid/studentquizrecords", async (req, res) => {
    const { quizid } = req.params;
    const studentId = req.session.currentUser._id;
    const newRecord = req.body;
    newRecord.studentId = studentId;
    newRecord.quizId = quizid;

    try {
      const createdRecord = await createStudentQuizRecord(newRecord);
      res.status(201).json(createdRecord);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
}
