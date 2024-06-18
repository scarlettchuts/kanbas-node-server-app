import model from "./model.js";

export const createModule = (module) => {
  return model.create(module);
};

export const findModulesForCourse = (cid) => model.find({ course: cid });

export const updateModule = async (moduleId, module) => {
  await model.updateOne({ _id: moduleId }, { $set: module });
};

export const deleteModule = (moduleId) => {
  return model.deleteOne({ _id: moduleId });
};
