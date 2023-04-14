import { toast } from 'react-toastify';
import { useDeleteContactMutation } from 'redux/Api/contactsApi';

export default function ContactItem({ contact: { id, name, phone_number } }) {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  async function handleDeleteContact() {
    try {
      await deleteContact(id);
      toast.success(`Contact ${name} deleted`);
    } catch (error) {
      toast.error(error);
    }
  }

  return (
    <li>
      <p>
        {name}: <span>{phone_number}</span>
      </p>

      <button onClick={handleDeleteContact} type="button" disabled={isLoading}>
        {isLoading ? 'deleting...' : 'delete contact'}
      </button>
    </li>
  );
}
