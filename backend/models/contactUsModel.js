import mongoose from "mongoose";
import validator from "validator";

const contactUsSchema = mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      validate: validator.isEmail,
    },
    mobile: {
      type: Number,
    },
    purpose: {
      type: String,
      required: true,
    },
    message: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const ContactUs = mongoose.model("ContactUs", contactUsSchema);
export default ContactUs;
