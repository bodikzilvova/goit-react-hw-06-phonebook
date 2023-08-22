import {
  ContactListUl,
  ContactListItem,
  ButtonDelete,
} from './ContactList.styled';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactListUl>
      {contacts.map(contact => (
        <ContactListItem key={contact.id}>
          {contact.name}: {contact.number}
          <ButtonDelete onClick={() => onDeleteContact(contact.id)}>
            Delete
          </ButtonDelete>
        </ContactListItem>
      ))}
    </ContactListUl>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
