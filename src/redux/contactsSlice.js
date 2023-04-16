import { createSlice } from '@reduxjs/toolkit';
import { addContact, deletedContact, fetchContacts } from './operation';
import { toast } from 'react-toastify';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder.addCase(fetchContacts.pending, (state, _) => {
      return { ...state, isLoading: true };
    });
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      return {
        ...state,
        isLoading: false,
        items: action.payload,
      };
    });
    builder.addCase(fetchContacts.rejected, (state, action) => {
      toast.error(action.payload);
      return { ...state, isLoading: false, error: action.payload };
    });
    // ! ========================================================
    builder.addCase(deletedContact.pending, (state, _) => {
      return { ...state, isLoading: true };
    });
    builder.addCase(deletedContact.fulfilled, (state, action) => {
      toast.success(`Contact ${action.payload.name} deleted`);
      return {
        ...state,
        isLoading: false,
        items: [
          ...state.items.filter(item => item.id !== `${action.payload.id}`),
        ],
      };
    });
    builder.addCase(deletedContact.rejected, (state, action) => {
      toast.error(action.payload);
      return { ...state, isLoading: false, error: action.payload };
    });
    // ! ========================================================
    builder.addCase(addContact.pending, (state, _) => {
      return { ...state, isLoading: true };
    });
    builder.addCase(addContact.fulfilled, (state, action) => {
      toast.success(`Contact ${action.payload.name} was added`, {
        autoClose: 2500,
      });
      return {
        ...state,
        isLoading: false,
        items: [...state.items, action.payload],
      };
    });
    builder.addCase(addContact.rejected, (state, action) => {
      toast.error(action.payload);
      return { ...state, isLoading: false, error: action.payload };
    });
  },
});

export default contactsSlice.reducer;
