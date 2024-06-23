import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    quizId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "quizModel",
    },
    questionType: String,
    questionText: String,
    points: Number,
    choices: [String],
    correctAnswer: String,
  },
  { collection: "questions" }
);

export default questionSchema;
