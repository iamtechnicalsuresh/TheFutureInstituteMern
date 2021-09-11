import express from "express";
import {
  registerUser,
  loginUser,
  getUsers,
  getUser,
  deleteUser,
} from "../controllers/userController.js";
import { isLoggedIn, isAuthorized } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.route("/").get(isLoggedIn, isAuthorized("admin"), getUsers);
router
  .route("/:id")
  .get(isLoggedIn, isAuthorized("admin"), getUser)
  .delete(isLoggedIn, isAuthorized("admin"), deleteUser);

export default router;
