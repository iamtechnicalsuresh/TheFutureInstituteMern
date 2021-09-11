import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, { rejectWithValue, getState }) => {
    const currentState = getState().authUser;
    const { user } = currentState;
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };
      const response = await axios.get("/api/v1/users", config);
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

export const fetchUser = createAsyncThunk(
  "users/fetchUsers",
  async (id, { rejectWithValue, getState }) => {
    const currentState = getState().authUser;
    const { user } = currentState;
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };
      const response = await axios.get(`/api/v1/users/${id}`, config);
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

export const deleteUser = createAsyncThunk(
  "users/fetchUsers",
  async (id, { rejectWithValue, getState }) => {
    const currentState = getState().authUser;
    const { user } = currentState;
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };
      const response = await axios.delete(`/api/v1/users/${id}`, config);
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
  error: "",
  success: "",
  users: [],
  user: {},
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    clearError(state) {
      state.error = "";
    },
  },
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.loading = true;
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [fetchUsers.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [fetchUser.pending]: (state) => {
      state.loading = true;
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [fetchUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [deleteUser.pending]: (state) => {
      state.loading = true;
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.success = true;
      state.users = action.payload;
    },
    [deleteUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { clearError } = userSlice.actions;

export default userSlice.reducer;
