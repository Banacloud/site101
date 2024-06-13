import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usersArray: [],
  newUser: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  },
};
const reducers = {
  registerNewUser: (state, action) => {},
};

const UserSlice = createSlice({
  name: "users",
  initialState,
  reducers,
});

export default UserSlice.reducer;
export const { registerNewUser } = UserSlice.actions;
