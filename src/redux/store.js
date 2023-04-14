import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './filterSlice';
import { contactsApi } from './Api/contactsApi';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },

  middleware: getDefaultMiddleware => [
    contactsApi.middleware,
    ...getDefaultMiddleware(),
  ],
});

setupListeners(store.dispatch);
