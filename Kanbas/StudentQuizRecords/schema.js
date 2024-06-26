import mongoose from "mongoose";

const studentQuizRecordSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserModel",
    },
    quizId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "QuizModel",
    },
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CourseModel",
    },
    attemptNumber: Number,
    dateTaken: Date,
    answers: [
      {
        questionId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "QuestionModel",
        },
        studentAnswer: String,
        isCorrect: Boolean,
        _id: false,
      },
    ],
    score: Number,
    duration: Number,
  },

  { collection: "studentQuizRecords" }
);

export default studentQuizRecordSchema;
