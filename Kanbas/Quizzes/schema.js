import mongoose from "mongoose";

const quizSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CourseModel",
    },
    quizType: {
      type: String,
      enum: [
        "Graded Quiz",
        "Practice Quiz",
        "Graded Survey",
        "Ungraded Survey",
      ],
      default: "Graded Quiz",
    },
    points: Number,
    assignmentGroup: {
      type: String,
      enum: ["Quizzes", "Exams", "Assignments", "Project"],
      default: "Quizzes",
    },
    shuffleAnswers: {
      type: Boolean,
      default: true,
    },
    timeLimit: {
      type: Number,
      default: 20,
    },
    multipleAttempts: {
      type: Boolean,
      default: false,
    },
    howManyAttempts: {
      type: Number,
      default: 1,
    },
    viewResponses: String,
    showCorrectAnswers: String,
    accessCode: {
      type: String,
      default: " ",
    },
    oneQuestionAtATime: {
      type: Boolean,
      default: true,
    },
    requireRespondusLockDownBrower: Boolean,
    requiredToViewQuizResults: Boolean,
    webcamRequired: {
      type: Boolean,
      default: false,
    },
    lockQuestionsAfterAnswering: {
      type: Boolean,
      default: false,
    },
    dueDate: Date,
    for: String,
    availableDate: Date,
    untilDate: Date,
    questionIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "QuestionModel",
        _id: false,
      },
    ],
    isPublished: {
      type: Boolean,
      default: false,
    },
  },
  { collection: "quizzes" }
);

export default quizSchema;
