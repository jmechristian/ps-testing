import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  session: null,
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
    setSession: (state, action) => {
      state.session = action.payload;
    },
    clearSession: (state) => {
      state.session = null;
    },
  },
});

export const { setUser, clearUser, setSession, clearSession } =
  authSlice.actions;

export default authSlice.reducer;
