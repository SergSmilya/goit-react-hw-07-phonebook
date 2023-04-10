import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/conatactsSlice';

// import Filter from 'components/Filter/Filter';

export default function Contacts({ contacts }) {
  const dispatch = useDispatch();

  return (
    <div>
      {/* <Filter onFilterControl={onFilterControl} /> */}
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            <p>
              {name}: <span>{number}</span>
            </p>

            <button onClick={() => dispatch(deleteContact(id))} type="button">
              delete contact
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
