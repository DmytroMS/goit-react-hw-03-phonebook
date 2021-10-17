import react, { Component } from "react";
import shortid from 'shortid';
import f from './Contacts.module.css';
class InputForm extends Component {
    state = {
        name: '',
        number: ''
    }

  handleInputChange = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

handleSubmit = e => {
        e.preventDefault();
  this.props.addContactOnSubmit(this.state)
        this.reset();
    };

    reset = () => {
        this.setState({
            name: '',
            number: ''
        });
    };
    
    nameInputId = shortid.generate();
    numberInputId = shortid.generate();

    render() {
        return (
          <div className={f.forma}>
          <form onSubmit={this.handleSubmit} >
          <label className={f.forma__label} htmlFor={this.nameInputId}>
            NAME
            <input className={f.forma__input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              value={this.state.name}
                        onChange={this.handleInputChange}
                        id={this.nameInputId}
            />
          </label>

          <label className={f.forma__label} htmlFor={this.numberInputId} >
            NUMBER
            <input className={f.forma__input}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              value={this.state.number}
                        onChange={this.handleInputChange}
                        id={this.numberInputId}
            />
          </label>

          <button className={f.forma__btn} type="submit">Add Contact</button>
        </form>
</div>
        )
    };
};

export default InputForm; 