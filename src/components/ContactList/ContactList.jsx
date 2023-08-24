import { removeContact } from 'redux/contactsSlice';
import {
  ContactListUl,
  ContactListItem,
  ButtonDelete,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  console.log(contacts)
  const dispatch = useDispatch();


  const handleDeleteContact = contactId => {
    dispatch(removeContact(contactId));
  };

  return (
    <ContactListUl>
      {contacts.map(contact => (
        <ContactListItem key={contact.id}>
          {contact.name}: {contact.number}
          <ButtonDelete onClick={() => handleDeleteContact(contact.id)}>
            Delete
          </ButtonDelete>
        </ContactListItem>
      ))}
    </ContactListUl>
  );
};
