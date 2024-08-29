import ContactListItem from '../ContactListItem/ContactListItem';

const ContactList = ({ contacts }) => (
  <ul className="list-disc pl-5">
    {contacts.map(contact => (
      <ContactListItem key={contact.id} contact={contact} />
    ))}
  </ul>
);

export default ContactList;
