import { Container } from './Container/Container';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, removeContact } from 'redux/contactsSlice';

export const App = () => {
  const contacts = useSelector(state => state.contacts);
  console.log(contacts)
  const dispatch = useDispatch();

  // const handleFormSubmit = ({ name, number }) => {
  //   if (contacts) {
  //     const existingContact = contacts.find(
  //       contact => contact.name.toLowerCase() === name.toLowerCase()
  //     );
  
  //     if (existingContact) {
  //       alert(`${name} is already in contacts`);
  //     } else {
  //       const newContact = {
  //         id: nanoid(),
  //         name: name,
  //         number: number,
  //       };
  
  //       dispatch(addContact(newContact));
  //     }
  //   }
  // };

  const handleFormSubmit = ({ name, number }) => {
    if (contacts.length > 0) {
      const existingContact = contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );
  
      if (existingContact) {
        alert(`${name} is already in contacts`);
      } else {
        const newContact = {
          id: nanoid(),
          name: name,
          number: number,
        };
  
        dispatch(addContact(newContact));
      }
    }
  };;

  const handleDeleteContact = contactId => {
    dispatch(removeContact(contactId));
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleFormSubmit} />

      <section>
        <h2>Contacts</h2>
        <Filter />
        <ContactList onDeleteContact={handleDeleteContact}
        />
      </section>
    </Container>
  );
};
