import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  user: {
    email: string;
    role: 'admin' | null;
  } | null;
}

const initialState: AuthState = {
  token: localStorage.getItem('adminAuth') || null,
  isAuthenticated: !!localStorage.getItem('adminAuth'),
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ token: string; user: { email: string; role: 'admin' } }>
    ) => {
      const { token, user } = action.payload;
      state.token = token;
      state.user = user;
      state.isAuthenticated = true;
      localStorage.setItem('adminAuth', token);
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem('adminAuth');
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer; 