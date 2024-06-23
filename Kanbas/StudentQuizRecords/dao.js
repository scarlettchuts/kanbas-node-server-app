import studentQuizRecordModel from "./model.js";

export const findStudentQuizRecordForQuiz = (quizId, attemptNumber) => {
  return studentQuizRecordModel.find({
    quizId: quizId,
    attemptNumber: attemptNumber,
  });
};

export const findStudentQuizRecordByStudent = (
  studentId,
  quizId,
  attemptNumber
) => {
  return studentQuizRecordModel
    .find({
      studentId: studentId,
      quizId: quizId,
      attemptNumber: attemptNumber,
    })
    .populate({
      path: "answers.questionId",
    });
};
