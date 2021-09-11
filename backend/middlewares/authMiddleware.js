import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import catchAsyncHandler from "../utils/catchAsyncHandler.js";
import AppCustomError from "../middlewares/appCustomError.js";

export const isLoggedIn = catchAsyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(
      new AppCustomError("Please login to access this resource.", 400)
    );
  }

  const decodeToken = await jwt.verify(token, process.env.JWT_TOKEN);

  const user = await User.findOne({ _id: decodeToken.id }).select("-password");

  if (!user) {
    return next(
      new AppCustomError("Invalid User not found in our database.", 400)
    );
  }

  req.user = user;
  next();
});

export const isAuthorized = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppCustomError(
          "You are not authorized to perform this action.",
          403
        )
      );
    }
    next();
  };
};
