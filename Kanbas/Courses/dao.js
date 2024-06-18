import model from "./model.js";

export const createCourse = (course) => {
  return model.create(course);
};

export const findAllCourses = () => {
  return model.find();
};

export const updateCourse = async (courseId, course) => {
  await model.updateOne({ _id: courseId }, { $set: course });
};

export const deleteCourse = (courseId) => model.deleteOne({ _id: courseId });
