import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts, deleteContact } from './Api/contactsApi';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  return await getContacts();
});

export const deletedContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const { data } = await deleteContact(id);
    return data;
  }
);

export const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deletedContact.fulfilled, (state, action) => {
        state.items.filter(item => item.id !== action.payload);
      });
  },
});

export default contactsSlice.reducer;
