import express from "express";
import {
  registerUser,
  loginUser,
  getUsers,
  getUser,
  deleteUser,
  changePasswordByAdmin,
  registerUserbyAdmin,
} from "../controllers/userController.js";
import { isLoggedIn, isAuthorized } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.put(
  "/change-password-by-admin",
  isLoggedIn,
  isAuthorized("admin"),
  changePasswordByAdmin
);

router
  .route("/")
  .get(isLoggedIn, isAuthorized("admin"), getUsers)
  .post(isLoggedIn, isAuthorized("admin"), registerUserbyAdmin);
router
  .route("/:id")
  .get(isLoggedIn, isAuthorized("admin"), getUser)
  .delete(isLoggedIn, isAuthorized("admin"), deleteUser);

export default router;
