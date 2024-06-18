import mongoose from "mongoose";

const moduleSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    course: String,
    lessons: [Object],
  },
  { collection: "modules" }
);

export default moduleSchema;
