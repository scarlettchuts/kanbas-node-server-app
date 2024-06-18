import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema(
  {
    title: String,
    course: String,
    description: String,
    fromDate: Date,
    untilDate: Date,
    dueDate: Date,
    points: Number,
  },
  { collection: "assignments" }
);

export default assignmentSchema;
