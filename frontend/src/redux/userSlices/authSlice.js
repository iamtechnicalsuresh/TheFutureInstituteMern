import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  user: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("theFutureInsituteUserInfo"))
    : null,
  error: "",
  success: "",
};

export const login = createAsyncThunk(
  "authUser/login",
  async (data, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await axios.post("/api/v1/users/login", data, config);
      localStorage.setItem(
        "theFutureInsituteUserInfo",
        JSON.stringify(response.data)
      );
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

export const register = createAsyncThunk(
  "authUser/register",
  async (data, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await axios.post("/api/v1/users/register", data, config);
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

const authSlice = createSlice({
  name: "authUser",
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
    // Login
    [login.pending]: (state, action) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.loading = false;
      state.success = true;
      state.user = action.payload;
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // Register
    [register.pending]: (state, action) => {
      state.loading = false;
    },
    [register.fulfilled]: (state, action) => {
      state.loading = false;
      state.success = true;
      state.user = action.payload;
    },
    [register.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { clearError, clearSuccess } = authSlice.actions;
export default authSlice.reducer;
