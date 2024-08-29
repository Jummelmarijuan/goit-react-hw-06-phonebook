import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactSlice';

const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li className="mb-2 flex justify-between items-center border-b border-gray-200 pb-2">
      <span className="text-gray-800">{contact.name}: {contact.number}</span>
      <button
        onClick={() => dispatch(deleteContact(contact.id))}
        className="px-2 py-1 text-red-500 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;
