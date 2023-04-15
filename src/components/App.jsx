import Contacts from './Contacts/Contacts';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contactsSlice';

import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

export default function App() {
  const dispatch = useDispatch();
  const filter = useSelector(({ filter }) => filter);
  const contacts = useSelector(({ contacts: { items } }) => items[0]);

  const onFilterSearch = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [contacts, dispatch]);

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
      {contacts && <Contacts contacts={onFilterSearch()} />}

      <ToastContainer autoClose={1000} />
    </div>
  );
}

// ========================================================

// import Contacts from './Contacts/Contacts';
// import ContactForm from './ContactForm/ContactForm';
// import Filter from './Filter/Filter';
// import { useSelector } from 'react-redux';
// import { useGetcontactsQuery } from 'redux/Api/contactsApi';
// import { ToastContainer } from 'react-toastify';

// import 'react-toastify/dist/ReactToastify.css';

// export default function App() {
//   const filter = useSelector(({ filter }) => filter);
//   const { data: contacts, error, isLoading } = useGetcontactsQuery();

//   const onFilterSearch = () => {
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter)
//     );
//   };

//   return (
//     <div
//       style={{
//         height: '100%',
//         display: 'block',
//         fontSize: 20,
//         color: '#010101',
//       }}
//     >
//       {error ? (
//         <>Oh no, there was an error</>
//       ) : isLoading ? (
//         <>Loading...</>
//       ) : contacts ? (
//         <>
//           <h1>Phonebook</h1>
//           <ContactForm />

//           <h2>Contacts</h2>
//           <Filter />
//           <Contacts contacts={onFilterSearch()} />
//         </>
//       ) : null}
//       <ToastContainer autoClose={1000} />
//     </div>
//   );
// }
