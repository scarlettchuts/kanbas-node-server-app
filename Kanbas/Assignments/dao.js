import model from "./model.js";

export const createAssignment = (assignment) => {
  return model.create(assignment);
};

export const findAssignmentForCourse = (cid) => {
  return model.find({ course: cid });
};

// export const findAssignmentByTitle = (title) => model.findOne({ title: title });

export const updateAssignment = async (assignmentId, assignment) => {
  await model.updateOne({ _id: assignmentId }, { $set: assignment });
};

export const deleteAssignment = (assignmentId) => {
  return model.deleteOne({ _id: assignmentId });
};
