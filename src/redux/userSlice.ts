// src/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  name: string;
  email: string;
  username: string;
  mobile: string;
  agreeTerms: boolean;
}
export interface SelectedItem {
  id: number;
  name: string;
}
export interface CounterState {
  user: UserState | null;
  category: SelectedItem[] | null;
  

}

export const initialState: CounterState = {
  user: null,
  category:null,
}
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.user= action.payload;
    },
    setCategory: (state, action: PayloadAction<SelectedItem[]>) => {
      state.category= action.payload;
    },
    clearUser: () => initialState,
  },
});

export const { setUser,setCategory, clearUser } = userSlice.actions;

export default userSlice.reducer;
