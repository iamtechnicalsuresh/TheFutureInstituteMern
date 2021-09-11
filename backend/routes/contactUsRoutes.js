import express from "express";
import {
  createContact,
  getContacts,
  deleteContact,
} from "../controllers/contactUsController.js";
import { isLoggedIn, isAuthorized } from "../middlewares/authMiddleware.js";

const router = express.Router();

router
  .route("/")
  .post(createContact)
  .get(isLoggedIn, isAuthorized("admin"), getContacts);
router.route("/:id").delete(isLoggedIn, isAuthorized("admin"), deleteContact);

export default router;
