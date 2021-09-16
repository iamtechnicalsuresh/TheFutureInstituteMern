import { configureStore } from "@reduxjs/toolkit";
import coursesSlice from "./coursesSlice/coursesSlice";
import contactSlice from "./contactSlice/contactSlice";
import authUser from "./userSlices/authSlice";
import userSlice from "./userSlices/userSlice";
import navbarSlice from "./navbarSlices/navbarSlice";

const store = configureStore({
  reducer: {
    navbar: navbarSlice,
    courses: coursesSlice,
    contact: contactSlice,
    authUser: authUser,
    users: userSlice,
  },
});

export default store;
