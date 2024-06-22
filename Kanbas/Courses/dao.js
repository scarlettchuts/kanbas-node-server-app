import courseModel from "./model.js";

export const findAllCourses = () => {
  return courseModel.find();
};

export const createCourse = (course) => {
  return courseModel.create(course);
};

export const updateCourse = async (courseId, course) => {
  await courseModel.updateOne({ _id: courseId }, { $set: course });
};

export const deleteCourse = (courseId) =>
  courseModel.deleteOne({ _id: courseId });

// ================================================ //
export const findCoursesByAuthor = (author) => {
  return courseModel.find({ author: author });
};
