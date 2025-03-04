import Contact from '../Contact/Contact'
import css from './ContactList.module.css'

const ContactList = ({ contacts, onDelete }) => {
    return (
        <div className={css.listWrapper}>
            <ul className={css.list}>
            {contacts.map(contact => (
                <Contact
                    key={contact.id}
                    id={contact.id}
                    name={contact.name}
                    number={contact.number}
                    onDelete={onDelete} />
            ))}
            </ul>
        </div>
    );
};

export default ContactList;