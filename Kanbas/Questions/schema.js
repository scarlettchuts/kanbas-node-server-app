import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    quizId: ObjectId, // Reference to the quiz
    questionType: String, // "Multiple Choice", "True/False", "Fill in the Blank"
    questionText: String,
    points: Number,
    choices: [
      // Only for Multiple Choice
      {
        text: String,
        isCorrect: Boolean,
      },
    ],
    correctAnswers: [String], // For "Fill in the Blank", a list of acceptable answers
  },
  { collection: "questions" }
);

export default questionSchema;
