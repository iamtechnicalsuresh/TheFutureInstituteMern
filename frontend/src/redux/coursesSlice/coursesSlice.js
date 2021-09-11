import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async (_, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await axios.get("/api/v1/courses", config);
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

export const postCourse = createAsyncThunk(
  "courses/postCourse",
  async (course, { rejectWithValue, getState }) => {
    const currentState = getState().authUser;
    const { user } = currentState;

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };
      const response = await axios.post("/api/v1/courses", course, config);
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

export const deleteCourse = createAsyncThunk(
  "courses/delete",
  async (slug, { rejectWithValue, getState }) => {
    const currentState = getState().authUser;
    const { user } = currentState;
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };
      const response = await axios.delete(`/api/v1/courses/${slug}`, config);
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
  course: {},
  error: "",
  success: "",
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    clearError(state) {
      state.error = "";
    },
    clearSuccess(state) {
      state.success = "";
    },
  },
  extraReducers: {
    // Fetch All Courses
    [fetchCourses.pending]: (state, action) => {
      state.loading = true;
      // state.courses = [];
    },
    [fetchCourses.fulfilled]: (state, action) => {
      state.loading = false;
      state.courses = action.payload;
    },
    [fetchCourses.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
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
    // Post Course
    [postCourse.pending]: (state, action) => {
      state.loading = true;
    },
    [postCourse.fulfilled]: (state, action) => {
      state.loading = false;
      state.success = true;
    },
    [postCourse.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // Delete Course
    [deleteCourse.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteCourse.fulfilled]: (state, action) => {
      state.loading = false;
      state.success = true;
    },
    [deleteCourse.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { clearError, clearSuccess } = coursesSlice.actions;
export default coursesSlice.reducer;
