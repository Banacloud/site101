import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usersArray: [],
  loggedIn: null,
};
const reducers = {
  registerNewUser: (state, action) => {},
  login: (state, action) => {
    state.loggedIn = action.payload;
  },
  logout: (state, action) => {
    state.loggedIn = null;
  },
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers,
});

export default UserSlice.reducer;
export const { registerNewUser, login, logout } = UserSlice.actions;
