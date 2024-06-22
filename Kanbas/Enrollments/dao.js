import enrollmentModel from "./model.js";

export const findAllEnrollments = () => {
  return enrollmentModel.find();
};

export const createEnrollment = (enrollment) => {
  return enrollmentModel.create(enrollment);
};

export const unenrollStudentFromCourse = (student, course) => {
  return enrollmentModel.deleteOne({ student: student, course: course });
};

export const findEnrollmentsByStudent = (student) => {
  return enrollmentModel.find({ student }).populate("course");
};

export const findEnrollmentsByCourse = (course) => {
  return enrollmentModel.find({ course }).populate("student");
};
