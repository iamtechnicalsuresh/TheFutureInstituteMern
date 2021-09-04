import mongoose from "mongoose";
import slugify from "slugify";

const coursesSchema = mongoose.Schema(
  {
    courseName: {
      type: String,
      required: true,
      unique: true,
    },
    courseDescription: {
      type: String,
      required: true,
    },
    courseSlug: {
      type: String,
    },
    courseTopics: [
      {
        type: String,
      },
    ],
    courseDuration: {
      type: String,
    },
    coursePrice: {
      type: Number,
    },
    courseCoverImage: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

coursesSchema.pre("save", async function () {
  this.courseSlug = await slugify(this.courseName, { lower: true });
});

const Courses = mongoose.model("Course", coursesSchema);
export default Courses;
