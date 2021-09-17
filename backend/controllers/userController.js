import User from "../models/userModel.js";
import catchAsyncHandler from "../utils/catchAsyncHandler.js";
import AppCustomError from "../middlewares/appCustomError.js";
import { authToken } from "../middlewares/authToken.js";

export const registerUser = catchAsyncHandler(async (req, res, next) => {
  const { fullname, email, mobile, password, cpassword } = req.body;
  const findUser = await User.findOne({ email });
  if (findUser) {
    return next(
      new AppCustomError(
        "Email is already registered try with another email.",
        404
      )
    );
  }
  if (password !== cpassword) {
    return next(
      new AppCustomError("Password and Confirm password don't match.", 404)
    );
  }

  await User.create({
    fullname,
    email,
    mobile,
    password,
  });

  res.status(201).json({
    status: "success",
    message: "User register successfully.",
  });
});

export const loginUser = catchAsyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  if (email === "" || password === "") {
    return next(new AppCustomError("Email and Pasword can't be empty.", 404));
  }
  const user = await User.findOne({ email });
  console.log(user.password);
  if (!user || !(await user.isPasswordMatched(password, user.password))) {
    return next(new AppCustomError("Invalid Email and password.", 404));
  }

  let token = authToken(user._id);
  res.status(200).json({
    status: "success",
    token,
    fullname: user.fullname,
    email: user.email,
    role: user.role,
    profileImage: user.profileImage,
    message: "User Login Successfully.",
  });
});

export const changePasswordByAdmin = catchAsyncHandler(
  async (req, res, next) => {
    const { id, password, cpassword } = req.body;
    if (password !== cpassword) {
      return next(
        new AppCustomError("Password and Confirm Password do not match.", 403)
      );
    }
    const user = await User.findById(id);
    if (!user) {
      return next(new AppCustomError("User not found.", 403));
    }
    user.password = password;
    await user.save();
    res.status(200).json({
      status: "success",
      message: "Password Changed Successfully.",
    });
  }
);

export const updateUserByAdmin = catchAsyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const { fullname, email, role } = req.body;
  console.log(req.body);
  console.log(id);

  const updateUser = await User.findById(id);
  if (!updateUser) {
    return next(
      new AppCustomError("User not found please update correct user.", 403)
    );
  }
  updateUser.fullname = fullname;
  updateUser.email = email;
  updateUser.role = role;

  updateUser.save();
  res.status(200).json({
    status: "success",
    message: "User Updated Successfully.",
  });
});

export const registerUserbyAdmin = catchAsyncHandler(async (req, res, next) => {
  const { fullname, email, mobile, password, cpassword, role } = req.body;
  const findUser = await User.findOne({ email });
  if (findUser) {
    return next(
      new AppCustomError(
        "Email is already registered try with another email.",
        404
      )
    );
  }
  if (password !== cpassword) {
    return next(
      new AppCustomError("Password and Confirm password don't match.", 404)
    );
  }

  await User.create({
    fullname,
    email,
    mobile,
    password,
    role,
  });

  res.status(201).json({
    status: "success",
    message: "User register successfully.",
  });
});

export const getUsers = catchAsyncHandler(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    status: "success",
    users,
  });
});

export const getUser = catchAsyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const user = await User.findById(id);
  if (!user) {
    return next(new AppCustomError("User not found", 400));
  }
  res.status(200).json({
    status: "success",
    user,
  });
});

export const deleteUser = catchAsyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const user = await User.findByIdAndDelete(id);
  if (!user) {
    return next(new AppCustomError("User not found", 400));
  }
  res.status(200).json({
    status: "success",
    message: "User removed Successfully.",
  });
});
