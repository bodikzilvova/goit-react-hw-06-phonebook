import { createSlice } from "@reduxjs/toolkit";

const contactInitialState = {
    contacts: [],
};

const contactSlice = createSlice({
    name: 'contacts',
    initialState: contactInitialState,
    reducers: {
        addContact: (state, action) => {
            state.items.push(action.payload);
        },
        removeContact: (state, action) => {
            state.contacts = state.contacts.filter(
            contact => contact.id !== action.payload
          );
        }
    }
});

export const { addContact, removeContact } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;