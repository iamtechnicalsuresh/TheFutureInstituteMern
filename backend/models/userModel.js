import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: validator.isEmail,
    },
    password: {
      type: String,
      required: true,
      minlendth: 6,
    },
    role: {
      type: String,
      default: "user",
      required: true,
      enum: ["admin", "user", "trainer"],
    },
    profileImage: {
      type: String,
      default: "default.jpg",
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.isPasswordMatched = async function (
  userPassword,
  databasePassword
) {
  return await bcrypt.compare(userPassword, databasePassword);
};

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

const User = mongoose.model("User", userSchema);
export default User;
