import bcrypt from "bcryptjs";

const users = [
  {
    fullname: "Admin User",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    role: "admin",
  },
  {
    fullname: "Suresh Thapa",
    email: "suresh@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    fullname: "Rekha Thapa",
    email: "rekha@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
