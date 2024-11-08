import { Router } from "express";
import { getTasks } from "../controllers/todoControllers";
import { createTask } from "../controllers/todoControllers";
import { updateTask } from "../controllers/todoControllers";
import { deleteTask } from "../controllers/todoControllers";

const router = Router();

router.get("/", getTasks);
router.post("/", createTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;
