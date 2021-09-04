import Courses from "../models/coursesModel.js";
import catchAsyncHandler from "../utils/catchAsyncHandler.js";
import appCustomError from "../middlewares/appCustomError.js";

export const getCourses = catchAsyncHandler(async (req, res, next) => {
  const courses = await Courses.find();
  res.status(200).json({
    status: "success",
    courses,
  });
});

export const getCourse = catchAsyncHandler(async (req, res, next) => {
  const slug = req.params.slug;
  const course = await Courses.findOne({ slug });
  if (!course) {
    next(new appCustomError("Invalid Resource. Resource not Found.", 404));
  }
  res.status(200).json({
    status: "success",
    course,
  });
});

export const createCourse = catchAsyncHandler(async (req, res, next) => {
  const course = await Courses.create(req.body);
  res.status(201).json({
    status: "success",
    course,
  });
});

export const deleteCourse = catchAsyncHandler(async (req, res, next) => {
  const slug = req.params.slug;
  const course = await Courses.findOneAndRemove({ slug });
  if (!course) {
    return next(new appCustomError("Course not found.", 404));
  }
  res.status(200).json({
    status: "success",
    message: "Course Delete Successfully.",
  });
});
