
import { Container } from './Container/Container';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';

import { filterReducer, setFilter } from 'redux/filterSlice';
import { addContact, removeContact } from 'redux/contactsSlice';

export const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(localStorage.getItem('contacts')) || []
  // );
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const handleFormSubmit = ({ name, number }) => {
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
  };

  const handleFilterByName = e => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };

  const handleDeleteContact = contactId => {
    dispatch(removeContact(contactId));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterReducer.toLowerCase())
  );

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleFormSubmit} />

      <section>
        <h2>Contacts</h2>
        <Filter handleFilterByName={handleFilterByName} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={handleDeleteContact}
        />
      </section>
    </Container>
  );
};
