import { useDispatch, useSelector } from 'react-redux';
import { selectLoading, selectfilteredContacts } from 'redux/selectors';
import { deleteContacts } from 'helpers/operations';
import {
  ContactsContainer,
  ContactsList,
  ContactsItem,
  ContactsText,
  ContactsBtn,
} from './contactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const filteredContacts = useSelector(selectfilteredContacts)
  

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
      )}
    </ContactsContainer>
  );
};
