// import Database from "../Database/index.js";
import * as dao from "./dao.js";

export default function CourseRoutes(app) {
  app.get("/api/courses", async (req, res) => {
    // const courses = Database.courses;
    const courses = await dao.findAllCourses();
    res.send(courses);
  });

  app.post("/api/courses", async (req, res) => {
    // const course = { ...req.body, _id: new Date().getTime().toString() };
    // Database.courses.push(course);
    const course = await dao.createCourse(req.body);
    res.send(course);
  });

  app.put("/api/courses/:id", async (req, res) => {
    // const { id } = req.params;
    // const course = req.body;
    // Database.courses = Database.courses.map((c) =>
    //   c._id === id ? { ...c, ...course } : c
    // );
    // res.sendStatus(204);

    const { id } = req.params;
    const status = await dao.updateCourse(id, req.body);
    res.json(status);
  });

  app.delete("/api/courses/:id", async (req, res) => {
    // const { id } = req.params;
    // Database.courses = Database.courses.filter((c) => c._id !== id);
    // res.sendStatus(204);

    const status = await dao.deleteCourse(req.params.id);
    res.json(status);
  });
}
