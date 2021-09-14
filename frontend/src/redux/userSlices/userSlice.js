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
  "users/fetchUser",
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

export const createUsers = createAsyncThunk(
  "users/createUsers",
  async (data, { rejectWithValue, getState }) => {
    const currentState = getState().authUser;
    const { user } = currentState;
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };
      const response = await axios.post("/api/v1/users", data, config);
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
  "users/deleteUsers",
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

export const changePasswordByAdmin = createAsyncThunk(
  "users/changePasswordByAdmin",
  async (data, { rejectWithValue, getState }) => {
    const currentState = getState().authUser;
    const { user } = currentState;
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };
      const response = await axios.put(
        "/api/v1/users/change-password-by-admin",
        data,
        config
      );
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

const initialState = {
  loading: false,
  users: [],
  user: {},
  error: "",
  success: "",
};

const userSlice = createSlice({
  name: "users",
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
      state.user = action.payload;
    },
    [fetchUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [createUsers.pending]: (state) => {
      state.loading = true;
    },
    [createUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.success = true;
      state.user = action.payload;
    },
    [createUsers.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [deleteUser.pending]: (state) => {
      state.loading = true;
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.success = true;
      state.user = action.payload;
    },
    [deleteUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [changePasswordByAdmin.pending]: (state) => {
      state.loading = true;
    },
    [changePasswordByAdmin.fulfilled]: (state, action) => {
      state.loading = false;
      state.success = true;
      state.user = action.payload;
    },
    [changePasswordByAdmin.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { clearError, clearSuccess } = userSlice.actions;

export default userSlice.reducer;
