import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accountBar: false,
  searchBar: false,
  navToggler: false,
  profileMenu: false,
  stickyNav: false,
};

const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setAccountBar(state, action) {
      state.accountBar = action.payload;
    },
    setSearchBar(state, action) {
      state.searchBar = action.payload;
    },
    setNavToggler(state, action) {
      state.navToggler = action.payload;
    },
    setProfileMenu(state, action) {
      state.profileMenu = action.payload;
    },
    setStickyNav(state, action) {
      state.stickyNav = action.payload;
    },
  },
});

export const {
  setAccountBar,
  setSearchBar,
  setNavToggler,
  setProfileMenu,
  setStickyNav,
} = navbarSlice.actions;
export default navbarSlice.reducer;
