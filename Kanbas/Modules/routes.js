// import db from "../Database/index.js";
import {
  createModule,
  deleteModule,
  findModulesForCourse,
  updateModule,
} from "./dao.js";

export default function ModuleRoutes(app) {
  app.get("/api/courses/:cid/modules", async (req, res) => {
    // const { cid } = req.params;
    // const modules = db.modules.filter((m) => m.course === cid);
    // res.json(modules);

    const { cid } = req.params;
    const modules = await findModulesForCourse(cid);
    res.json(modules);
  });

  app.post("/api/courses/:cid/modules", async (req, res) => {
    // const { cid } = req.params;
    // const newModule = {
    //   ...req.body,
    //   course: cid,
    //   _id: new Date().getTime().toString(),
    // };
    // db.modules.push(newModule);
    // res.send(newModule);

    const newModule = {
      ...req.body,
      description: "add from front end in the future",
      lessons: [],
    };
    const module = await createModule(newModule);
    res.send(module);
  });

  app.put("/api/modules/:mid", async (req, res) => {
    // const { mid } = req.params;
    // const moduleIndex = db.modules.findIndex((m) => m._id === mid);
    // db.modules[moduleIndex] = {
    //   ...db.modules[moduleIndex],
    //   ...req.body,
    // };
    // res.sendStatus(204);

    const { mid } = req.params;
    const status = await updateModule(mid, req.body);
    res.json(status);
  });

  app.delete("/api/modules/:mid", async (req, res) => {
    // const { mid } = req.params;
    // db.modules = db.modules.filter((m) => m._id !== mid);
    // res.sendStatus(200);

    const status = await deleteModule(req.params.mid);
    res.json(status);
  });
}
