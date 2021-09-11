import { configureStore } from "@reduxjs/toolkit";
import coursesSlice from "./coursesSlice/coursesSlice";
import contactSlice from "./contactSlice/contactSlice";
import authUser from "./userSlices/authSlice";
import userSlice from "./userSlices/userSlice";

const store = configureStore({
  reducer: {
    courses: coursesSlice,
    contact: contactSlice,
    authUser: authUser,
    users: userSlice,
  },
});

export default store;
