import react, { Component } from 'react';
import InputForm from './Components/ContactForm';
import shortid from 'shortid';
import { ContactList } from './Components/ContactList';
import Filter from './Components/FilterInput';
import s from './Components/ContactForm/Contacts.module.css';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  // Забираем контакты с локал сторедж

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    console.log('parsedContacts', parsedContacts);
    if (parsedContacts !== null) {
      this.setState({ contacts: parsedContacts });
    } else {
      this.setState({ contacts: initialContacts });
    }   
  }

  // Добавляем контакты в локал сторедж
  componentDidUpdate() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  onSubmitAddContact = data => {
    if (this.state.contacts.find(contact => contact.name === data.name)) {
      return alert(`${data.name} is alredy in contacts`);
    } else {
      data.id = shortid.generate();
      this.setState(prevState => ({
        contacts: [...prevState.contacts, data],
      }));
    }
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => {
        return contact.id !== id;
      }),
    }));
  };

  getvisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  filterContacts = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const visibleContacts = this.getvisibleContacts();
    const { filter } = this.state;
    return (
      <div className={s.container}>
        <h1>Phonebook</h1>
        <InputForm addContactOnSubmit={this.onSubmitAddContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.filterContacts} />
        <ContactList
          onDeleteContact={this.deleteContact}
          contacts={visibleContacts}
        />
      </div>
    );
  }
}

export default App;
