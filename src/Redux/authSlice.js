// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  accessToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.isAuthenticated = true;
      state.accessToken = action.payload.accessToken;
      localStorage.setItem('access_token', action.payload.accessToken);
    },
    loginFailure(state) {
      state.isAuthenticated = false;
      state.accessToken = null;
      localStorage.removeItem('access_token');
    },
    logout(state) {
      state.isAuthenticated = false;
      state.accessToken = null;
      localStorage.removeItem('access_token');
    },
  },
});

export const { loginSuccess, loginFailure, logout } = authSlice.actions;

export default authSlice.reducer;
