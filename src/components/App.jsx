import { ContactForm } from './contactForm/contactForm';
import { ContactList } from './contactList/contactList';
import { Filter } from './filter/filter';
import { FormHeader, MainContainer } from './App.styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filtersSlice/filtersSlice';
import { getContact, getError, getFilters, getLoading } from 'redux/selectors';
import { fetchContacts } from 'helpers/operations';
import { useEffect } from 'react';
import { ContactsText } from './contactList/contactList.styled';

const App = () => {
  const contacts = useSelector(getContact);
  const isLoading = useSelector(getLoading);
  const error = useSelector(getError);
  const filtered = useSelector(getFilters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onFilter = event => {
    const { value } = event.currentTarget;
    dispatch(setFilter(value));
  };

  return (
    <MainContainer>
      <ToastContainer autoClose={2000} />
      <FormHeader>Phonebook</FormHeader>
      <ContactForm />
      <FormHeader>Contacts</FormHeader>
      <Filter value={filtered} onFilter={onFilter} />
      {isLoading && <ContactsText>Loading contacts...</ContactsText>}
      {error && <p>{error}</p>}
      {contacts && <ContactList />}
    </MainContainer>
  );
};

export default App;
