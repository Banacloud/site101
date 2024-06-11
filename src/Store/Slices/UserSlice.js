import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
const reducers = {
    checkUser : (state, action) => {

    }
};

const UserSlice = createSlice({
  name: "users",
  initialState,
  reducers,
});



export default UserSlice.reducer;
export {checkUser} from UserSlice.actions