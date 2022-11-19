import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userProfile: null
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.userProfile = action.payload;
    },

    logout: state => {
      state.userProfile = null
    }
  }
});

export const { login, logout } = userSlice.actions;
export const selectUser = (state) => state.user.userProfile;

export default userSlice.reducer
