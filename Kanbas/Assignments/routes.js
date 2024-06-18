// import db from "../Database/index.js";
import {
  findAssignmentForCourse,
  createAssignment,
  updateAssignment,
  deleteAssignment,
} from "./dao.js";

export default function AssignmentRoutes(app) {
  app.get("/api/courses/:cid/assignments", async (req, res) => {
    // const { cid } = req.params;
    // const assignments = db.assignments.filter((a) => a.course === cid);
    // res.json(assignments);

    const { cid } = req.params;
    const assignments = await findAssignmentForCourse(cid);
    res.json(assignments);
  });

  app.post("/api/courses/:cid/assignments", async (req, res) => {
    const { cid } = req.params;
    // const newAssignment = {
    //   ...req.body,
    //   course: cid,
    //   _id: new Date().getTime().toString(),
    // };
    // db.assignments.push(newAssignment);
    // res.send(newAssignment);

    const newAssignment = {
      ...req.body,
      course: cid,
    };

    const assignment = await createAssignment(newAssignment);
    res.send(assignment);
  });

  app.put("/api/assignments/:aid", async (req, res) => {
    // const { aid } = req.params;
    // const assignmentIndex = db.assignments.findIndex((a) => a._id === aid);
    // db.assignments[assignmentIndex] = {
    //   ...db.assignments[assignmentIndex],
    //   ...req.body,
    // };
    // res.sendStatus(204);

    const { aid } = req.params;
    const status = await updateAssignment(aid, req.body);
    res.json(status);
  });

  app.delete("/api/assignments/:aid", async (req, res) => {
    // const { aid } = req.params;
    // db.assignments = db.assignments.filter((a) => a._id !== aid);
    // res.sendStatus(200);

    const status = await deleteAssignment(req.params.aid);
    res.json(status);
  });
}
