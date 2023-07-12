import { deleteContacts } from 'helpers/operations';
import {
  ContactsContainer,
  ContactsList,
  ContactsItem,
  ContactsText,
  ContactsBtn,
} from './contactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContact, getFilters, getLoading } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContact);
  const isLoading = useSelector(getLoading);
  const filtered = useSelector(getFilters);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filtered.toLowerCase())
  );

  const handleDelete = id => {
    dispatch(deleteContacts(id));
  };

 
  return (
    <ContactsContainer>
      {!isLoading && (
        <ContactsList>
          {filteredContacts.length > 0 ? (
            filteredContacts.map(({ id, name, number }) => (
              <ContactsItem key={id}>
                <ContactsText>
                  {name}:{' '}
                </ContactsText>
                <ContactsText>{number}</ContactsText>
                <ContactsBtn
                  type="button"
                  id={id}
                  onClick={() => handleDelete(id)}
                >
                  Delete
                </ContactsBtn>
              </ContactsItem>
            ))
          ) : (
            <ContactsText>No contacts found.</ContactsText>
          )}
        </ContactsList>
      )}
    </ContactsContainer>
  );
};
