import PropTypes from 'prop-types';
import s from './ContactList.module.css'

export default function ContactItem({id, name, number, onDeleteContact}) {
    return (
        <>
        <li className={s.contact}>
            <span className={s.contact__item}>{name}</span>
            <span className={s.contact__item}>{number}</span>
             <button className={s.contact__btn}  type="button" onClick={() => onDeleteContact(id)} >Delete</button>    
            </li>
        </>
        )
};

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};