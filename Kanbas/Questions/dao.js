import questionModel from "./model.js";

export const createQuestion = (question) => {
  return questionModel.create(question);
};

export const findQuestionForQuiz = (quizId) => {
  return questionModel.find({ quizId: quizId });
};

export const updateQuestion = async (questionId, question) => {
  await questionModel.updateOne({ _id: questionId }, { $set: question });
};

export const deleteQuestion = (questionId) => {
  return questionModel.deleteOne({ _id: questionId });
};
