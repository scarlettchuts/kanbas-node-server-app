import quizModel from "./model.js";

export const createQuiz = (quiz) => {
  return model.create(quiz);
};

export const findQuizForCourse = (cid) => {
  return model.find({ course: cid });
};

export const updateQuiz = async (quizId, quiz) => {
  await model.updateOne({ _id: quizId }, { $set: quiz });
};

export const deleteQuiz = (quizId) => {
  return model.deleteOne({ _id: quizId });
};
