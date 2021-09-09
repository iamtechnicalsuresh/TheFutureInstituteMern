import jwt from "jsonwebtoken";

export const authToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_TOKEN, {
    expiresIn: "10d",
  });
};
