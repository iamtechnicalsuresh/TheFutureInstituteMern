import express from "express";
import {
  getCourses,
  getCourse,
  createCourse,
  deleteCourse,
  updateCourse,
} from "../controllers/coursesController.js";
import { isLoggedIn, isAuthorized } from "../middlewares/authMiddleware.js";

const router = express.Router();

router
  .route("/")
  .get(getCourses)
  .post(isLoggedIn, isAuthorized("admin"), createCourse);
router
  .route("/:slug")
  .get(getCourse)
  .put(isLoggedIn, isAuthorized("admin"), updateCourse)
  .delete(isLoggedIn, isAuthorized("admin"), deleteCourse);

export default router;
