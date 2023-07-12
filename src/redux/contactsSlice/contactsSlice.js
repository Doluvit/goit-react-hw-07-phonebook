import { createSlice, isAllOf } from '@reduxjs/toolkit';
import {
  addContacts,
  deleteContacts,
  fetchContacts,
} from 'helpers/operations.js';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.rejected = action.payload;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const handleFulfilledFetch = (state, action) => {
  state.items = action.payload;
};

const handleFulfilledAdd = (state, action) => {
  state.items.push(action.payload);
};

const handleFulfilledDelete = (state, action) => {
  const index = state.items.findIndex(
    contact => contact.id === action.payload.id
  );
  state.items.splice(index, 1);
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFulfilledFetch)
      .addCase(addContacts.fulfilled, handleFulfilledAdd)
      .addCase(deleteContacts.fulfilled, handleFulfilledDelete)
      .addMatcher(
        isAllOf(
          fetchContacts.pending,
          addContacts.pending,
          deleteContacts.pending
        ),
        handlePending
      )
      .addMatcher(
        isAllOf(
          fetchContacts.rejected,
          addContacts.rejected,
          deleteContacts.rejected
        ),
        handleRejected
      )
      .addMatcher(
        isAllOf(
          fetchContacts.fulfilled,
          addContacts.fulfilled,
          deleteContacts.fulfilled
        ),
        handleFulfilled
      );
  },
});

export const contactReducer = contactsSlice.reducer;
