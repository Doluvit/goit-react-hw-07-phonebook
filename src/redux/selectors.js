import { createSelector } from '@reduxjs/toolkit';

export const selectContact = state => state.contacts.items;
export const selectLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilters = state => state.filters;


export const selectfilteredContacts = createSelector(
  [selectContact, selectFilters],
  (contacts, filtered) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filtered.toLowerCase())
    );
  }
);
