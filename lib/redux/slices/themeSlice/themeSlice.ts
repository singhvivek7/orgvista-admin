/* Core */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

/* Instruments */

const initialState: ThemeSliceState = {
  theme: 'dark',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    changeTheme: (state, action: PayloadAction<'dark' | 'light'>) => {
      state.theme = action.payload;
    },
  },
});

/* Types */
export interface ThemeSliceState {
  theme: 'dark' | 'light';
}
