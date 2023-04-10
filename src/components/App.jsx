import Contacts from './Contacts/Contacts';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import { useSelector } from 'react-redux';

export default function App() {
  const filter = useSelector(({ filter }) => filter);
  const contacts = useSelector(({ contacts }) => contacts);

  const onFilterSearch = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  return (
    <div
      style={{
        height: '100%',
        display: 'block',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <Contacts contacts={onFilterSearch()} />
    </div>
  );
}
