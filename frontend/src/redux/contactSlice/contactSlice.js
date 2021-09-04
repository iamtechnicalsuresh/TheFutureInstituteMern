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

const initialState = {
  loading: false,
  contact: {},
  error: "",
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers: {
    [postContact.pending]: (state, action) => {
      state.loading = true;
    },
    [postContact.fulfilled]: (state, action) => {
      state.loading = false;
      state.contact = action.payload;
    },
    [postContact.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default contactSlice.reducer;
