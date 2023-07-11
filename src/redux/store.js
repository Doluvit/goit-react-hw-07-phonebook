import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { contactReducer } from './contactsSlice/contactsSlice';
import { filtersReducer } from './filtersSlice/filtersSlice';



const rootReducer = combineReducers({
  contacts: contactReducer,
  filters: filtersReducer,
});



export const store = configureStore({
  reducer: rootReducer,
  });

