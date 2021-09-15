import Courses from "../models/coursesModel.js";
import catchAsyncHandler from "../utils/catchAsyncHandler.js";
import AppCustomError from "../middlewares/appCustomError.js";

export const getCourses = catchAsyncHandler(async (req, res, next) => {
  const courses = await Courses.find();
  res.status(200).json({
    status: "success",
    courses,
  });
});

export const getCourse = catchAsyncHandler(async (req, res, next) => {
  const courseSlug = req.params.slug;
  const course = await Courses.findOne({ courseSlug });
  if (!course) {
    next(new AppCustomError("Invalid Resource. Resource not Found.", 404));
  }
  res.status(200).json({
    status: "success",
    course,
  });
});

export const createCourse = catchAsyncHandler(async (req, res, next) => {
  let topics;

  const {
    courseName,
    courseDescription,
    courseTopics,
    courseDuration,
    coursePrice,
    courseCoverImage,
  } = req.body;
  topics = courseTopics.map((item) => item.newTopic);
  const course = await Courses.create({
    courseName,
    courseDescription,
    courseTopics: topics,
    courseDuration,
    coursePrice,
    courseCoverImage,
  });
  res.status(201).json({
    status: "success",
    course,
  });
});

export const updateCourse = catchAsyncHandler(async (req, res, next) => {
  const slug = req.params.slug;
  let topics;
  const {
    courseName,
    courseDescription,
    courseTopics,
    courseDuration,
    coursePrice,
    courseCoverImage,
  } = req.body;
  topics = courseTopics.map((item) => item.newTopic);
  const updateCourse = await Courses.findOne({ courseSlug: slug });
  if (!updateCourse) {
    return next(
      new AppCustomError("Course not found please edit correct course.", 403)
    );
  }
  updateCourse.courseName = courseName;
  updateCourse.courseDescription = courseDescription;
  updateCourse.courseTopics = topics;
  updateCourse.courseDuration = courseDuration;
  updateCourse.coursePrice = coursePrice;
  updateCourse.courseCoverImage = courseCoverImage;
  updateCourse.save();
  res.status(201).json({
    status: "success",
    message: "Course Updated Successfully.",
  });
});

export const deleteCourse = catchAsyncHandler(async (req, res, next) => {
  const courseSlug = req.params.slug;
  const course = await Courses.findOneAndDelete({ courseSlug });
  if (!course) {
    return next(new AppCustomError("Course not found.", 404));
  }
  res.status(200).json({
    status: "success",
    message: "Course Delete Successfully.",
  });
});
