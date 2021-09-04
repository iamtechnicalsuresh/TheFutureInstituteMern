import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async ({ rejectWithValue }) => {
    try {
      const response = await axios.get("/api/v1/courses");
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

export const fetchCourse = createAsyncThunk(
  "courses/fetchCourse",
  async (slug, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/v1/courses/${slug}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

const initialState = {
  loading: false,
  courses: [],
  error: "",
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers: {
    // Fetch All Courses
    [fetchCourses.pending]: (state, action) => {
      state.loading = true;
      state.courses = [];
    },
    [fetchCourses.fulfilled]: (state, action) => {
      state.courses = action.payload;
      state.loading = false;
    },
    [fetchCourses.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    // Fetch Single Course
    [fetchCourse.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchCourse.fulfilled]: (state, action) => {
      state.loading = false;
      state.course = action.payload;
    },
    [fetchCourse.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default coursesSlice.reducer;
