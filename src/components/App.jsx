import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { fetchContacts } from 'helpers/operations';

import { selectContact, selectError, selectLoading } from 'redux/selectors';

import { ContactForm } from './contactForm/contactForm';
import { ContactList } from './contactList/contactList';
import { Filter } from './filter/filter';
import { ContactsText } from './contactList/contactList.styled';
import { FormHeader, MainContainer } from './App.styled';

const App = () => {
  const contacts = useSelector(selectContact);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <MainContainer>
      <ToastContainer autoClose={2000} />
      <FormHeader>Phonebook</FormHeader>
      <ContactForm />
      <FormHeader>Contacts</FormHeader>
      <Filter />
      {isLoading && <ContactsText>Loading contacts...</ContactsText>}
      {error && <p>{error}</p>}
      {contacts && <ContactList />}
    </MainContainer>
  );
};

export default App;
