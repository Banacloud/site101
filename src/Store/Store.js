import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./Slices/UserSlice";

export default Store = configureStore({
  user: UserSlice,
});
