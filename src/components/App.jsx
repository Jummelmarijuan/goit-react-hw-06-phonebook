import { useSelector } from 'react-redux';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import { Toaster } from 'react-hot-toast';

const App = () => {
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Phonebook</h1>
      <ContactForm />
      <h2 className="text-xl font-semibold mt-6 mb-4">Contacts</h2>
      <Filter />
      <ContactList contacts={filteredContacts} />
      <Toaster position="top-right" />
    </div>
  );
};

export default App;
