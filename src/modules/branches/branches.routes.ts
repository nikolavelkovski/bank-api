import { Router } from "express";
import { BranchesController } from "./controllers/branches.controller";

const router = Router();
const controller = new BranchesController();

// GET /api/branches
router.get("/", controller.getAllBranches);

// GET /api/branches/:id
router.get("/:id", controller.getBranchById);

export default router;
