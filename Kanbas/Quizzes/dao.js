import quizModel from "./model.js";

export const createQuiz = (quiz) => {
  return quizModel.create(quiz);
};

export const findQuizForCourse = (cid) => {
  return quizModel.find({ courseId: cid });
  // return quizModel.find({});
};

export const updateQuiz = async (quizId, quiz) => {
  await quizModel.updateOne({ _id: quizId }, { $set: quiz });
};

export const deleteQuiz = (quizId) => {
  return quizModel.deleteOne({ _id: quizId });
};
