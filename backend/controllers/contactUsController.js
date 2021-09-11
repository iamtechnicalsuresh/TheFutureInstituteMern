import ContactUs from "../models/contactUsModel.js";
import catchAsyncHandler from "../utils/catchAsyncHandler.js";
import AppCustomError from "../middlewares/appCustomError.js";

export const createContact = catchAsyncHandler(async (req, res, next) => {
  const { fullname, email, mobile, purpose, message } = req.body;
  const contact = await ContactUs.create({
    fullname,
    email,
    mobile,
    purpose,
    message,
  });
  res.status(201).json({
    status: "success",
    contact,
  });
});

export const getContacts = catchAsyncHandler(async (req, res, next) => {
  const contacts = await ContactUs.find();
  res.status(200).json({
    status: "success",
    contacts,
  });
});

export const deleteContact = catchAsyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const contact = await ContactUs.findByIdAndDelete(id);
  if (!contact) {
    return next(new AppCustomError("Contact Not Found.", 400));
  }
  res.status(200).json({
    status: "success",
    message: "Contact Removed Successfully.",
  });
});
