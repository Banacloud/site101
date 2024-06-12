import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usersArray: [],
};
const reducers = {
  addUser: (state, action) => {},
};

const UserSlice = createSlice({
  name: "users",
  initialState,
  reducers,
});

export default UserSlice.reducer;
export const { addUser } = UserSlice.actions;
