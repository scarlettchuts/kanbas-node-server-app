import studentQuizRecordModel from "./model.js";

export const findStudentQuizRecordByStudent = (studentId, quizId) => {
  return studentQuizRecordModel
    .findOne({
      studentId: studentId,
      quizId: quizId,
    })
    .populate({
      path: "answers.questionId",
    });
};

export const createStudentQuizRecord = (record) => {
  return studentQuizRecordModel.create(record);
};
