import * as dao from "./dao.js";

export default function CourseRoutes(app) {
  /* Get All Courses */
  app.get("/api/courses", async (req, res) => {
    const courses = await dao.findAllCourses();
    res.send(courses);
  });

  /* Get My Published Courses */
  app.get("/api/courses/published", async (req, res) => {
    const author = req.session.currentUser;
    if (!author) {
      res.sendStatus(401);
      return;
    }
    const courses = await dao.findCoursesByAuthor(author._id);
    res.send(courses);
  });

  /* Add Course */
  app.post("/api/courses", async (req, res) => {
    const author = req.session.currentUser;
    if (!author) {
      res.sendStatus(401);
      return;
    }
    const newCourse = { ...req.body, author: author._id };
    const course = await dao.createCourse(newCourse);
    res.send(course);
  });

  /* Update Course */
  app.put("/api/courses/:id", async (req, res) => {
    const { id } = req.params;
    const status = await dao.updateCourse(id, req.body);
    res.json(status);
  });

  /* Delete Course */
  app.delete("/api/courses/:id", async (req, res) => {
    const status = await dao.deleteCourse(req.params.id);
    res.json(status);
  });
}
