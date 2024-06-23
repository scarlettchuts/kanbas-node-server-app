import mongoose from "mongoose";
import studentQuizRecordSchema from "./schema.js";

const studentQuizRecordModel = mongoose.model(
  "studentQuizRecordModel",
  studentQuizRecordSchema
);

export default studentQuizRecordModel;
