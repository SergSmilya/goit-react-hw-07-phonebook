import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',

  reducers: {
    addValue: (_, { payload }) => {
      return `${payload}`;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addValue } = filterSlice.actions;

export default filterSlice.reducer;
