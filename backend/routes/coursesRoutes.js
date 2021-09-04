import express from "express";
import {
  getCourses,
  getCourse,
  createCourse,
  deleteCourse,
} from "../controllers/coursesController.js";

const router = express.Router();

router.route("/").get(getCourses).post(createCourse);
router.route("/:slug").get(getCourse).delete(deleteCourse);

export default router;
