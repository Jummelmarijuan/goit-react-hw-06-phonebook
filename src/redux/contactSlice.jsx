import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: (state, action) => {
      const { name, number } = action.payload;
      if (state.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
        toast.error('Contact already exists');
        return state;
      }
      state.push({ id: Date.now(), name, number });
      toast.success('Contact added successfully');
    },
    deleteContact: (state, action) => {
      const id = action.payload;
      toast.success('Contact deleted successfully');
      return state.filter(contact => contact.id !== id);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
