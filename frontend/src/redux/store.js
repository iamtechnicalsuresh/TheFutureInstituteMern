import { configureStore } from "@reduxjs/toolkit";
import coursesSlice from "./coursesSlice/coursesSlice";
import contactSlice from "./contactSlice/contactSlice";

const store = configureStore({
  reducer: {
    courses: coursesSlice,
    contact: contactSlice,
  },
});

export default store;
