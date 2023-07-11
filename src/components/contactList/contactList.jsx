import { deleteContact } from 'redux/contactsSlice/contactsSlice';
import {
  ContactsContainer,
  ContactsList,
  ContactsItem,
  ContactsText,
  ContactsBtn,
} from './contactList.styled';
import { useDispatch } from 'react-redux';

export const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <ContactsContainer>
      <ContactsList>
        {contacts.length > 0 ? (
          contacts.map(({ id, name, number }) => (
            <ContactsItem key={id}>
              <ContactsText>{name}: </ContactsText>
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
    </ContactsContainer>
  );
};
