import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";

import connectDB from "./configs/db.js";
import globleErrorHandler from "./middlewares/globleErrorHandler.js";

import coursesRoutes from "./routes/coursesRoutes.js";
import contactUsRoute from "./routes/contactUsRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
dotenv.config();
connectDB();
app.use(express.json());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/courses", coursesRoutes);
app.use("/api/v1/contact", contactUsRoute);
app.use("/api/v1/users", userRoutes);

app.get("/", (req, res, next) => {
  res.json({
    status: "success",
    message: "Router working fine",
  });
});

app.use(globleErrorHandler);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server Running on ${port}`));
