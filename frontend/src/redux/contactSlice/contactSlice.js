import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const postContact = createAsyncThunk(
  "contact/postContact",
  async (contacts, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await axios.post("/api/v1/contact", contacts, config);
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

export const fetchContacts = createAsyncThunk(
  "contact/getchContacts",
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
      const response = await axios.get("/api/v1/contact", config);
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

export const deleteContact = createAsyncThunk(
  "contact/deleteContact",
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

      const response = await axios.delete(`/api/v1/contact/${id}`, config);
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
  contacts: [],
  contact: {},
  success: "",
  error: "",
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    clearError(state) {
      state.error = "";
    },
  },
  extraReducers: {
    [postContact.pending]: (state, action) => {
      state.loading = true;
    },
    [postContact.fulfilled]: (state, action) => {
      state.loading = false;
      state.contact = action.payload;
      state.success = true;
    },
    [postContact.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [fetchContacts.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.loading = false;
      state.contacts = action.payload;
    },
    [fetchContacts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [deleteContact.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.loading = false;
      state.success = true;
      // state.contact = action.payload;
    },
    [deleteContact.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { clearError } = contactSlice.actions;
export default contactSlice.reducer;
