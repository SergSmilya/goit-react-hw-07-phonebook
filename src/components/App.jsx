import Contacts from './Contacts/Contacts';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import { useSelector } from 'react-redux';
import { useGetcontactsQuery } from 'redux/Api/contactsApi';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const filter = useSelector(({ filter }) => filter);
  const { data: contacts, error, isLoading } = useGetcontactsQuery();

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
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : contacts ? (
        <>
          <h1>Phonebook</h1>
          <ContactForm />

          <h2>Contacts</h2>
          <Filter />
          <Contacts contacts={onFilterSearch()} />
        </>
      ) : null}
      <ToastContainer autoClose={1000} />
    </div>
  );
}
