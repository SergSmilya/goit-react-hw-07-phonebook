import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from './conatactsSlice';
import filterSlice from './filterSlice';

export const store = configureStore({
  reducer: { contacts: contactsSlice, filter: filterSlice },
});
