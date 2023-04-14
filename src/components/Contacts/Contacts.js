import ContactItem from 'components/ContactItem/ContactItem';

export default function Contacts({ contacts }) {
  return (
    <div>
      <ul>
        {contacts.map(contact => (
          <ContactItem contact={contact} key={contact.id} />
        ))}
      </ul>
    </div>
  );
}
