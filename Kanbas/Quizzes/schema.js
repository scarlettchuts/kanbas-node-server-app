import mongoose from "mongoose";

const quizSchema = new mongoose.Schema(
  {
    title: String,
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
      default: "Yes",
    },
    timeLimit: {
      type: String,
      default: "20 Minutes",
    },
    multipleAttempts: {
      type: Boolean,
      default: "No",
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
      default: "Yes",
    },
    requireRespondusLockDownBrower: Boolean,
    requiredToViewQuizResults: Boolean,
    webcamRequired: {
      type: Boolean,
      default: "No",
    },
    lockQuestionsAfterAnswering: {
      type: Boolean,
      default: "No",
    },
    dueDate: Date,
    for: String,
    availableDate: Date,
    untilDate: Date,
    isPublished: {
      type: Boolean,
      default: false,
    },
  },
  { collection: "quizzes" }
);

export default quizSchema;
