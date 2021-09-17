import express from "express";
import {
  registerUser,
  loginUser,
  getUsers,
  getUser,
  deleteUser,
  changePasswordByAdmin,
  registerUserbyAdmin,
  updateUserByAdmin,
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
router.put(
  "/update-users-by-admin/:id",
  isLoggedIn,
  isAuthorized("admin"),
  updateUserByAdmin
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
