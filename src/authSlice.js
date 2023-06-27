import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  session: null,
  currentUser: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    clearCurrentUser: (state) => {
      state.currentUser = null;
    },
    setSession: (state, action) => {
      state.session = action.payload;
    },
    clearSession: (state) => {
      state.session = null;
    },
  },
});

export const {
  setUser,
  clearUser,
  setSession,
  clearSession,
  setCurrentUser,
  clearCurrentUser,
} = authSlice.actions;

export default authSlice.reducer;
