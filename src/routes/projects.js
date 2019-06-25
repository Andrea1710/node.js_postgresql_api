import { Router } from "express";

const router = Router();

import {
  createProject,
  getProjects,
  getOneProject
} from "../controllers/project.controller";

// /api/projects/
router.get("/", getProjects);
router.post("/", createProject);

// /api/projects/:projectid
router.get("/:id", getOneProject);

export default router;
