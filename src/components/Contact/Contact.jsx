import css from './Contact.module.css'

import { IoPerson } from "react-icons/io5";
import { MdPhone } from "react-icons/md";


const Contact = ({ id, name, number, onDelete }) => {
    return (
        <li className={css.item}>
            <div className={css.wrapper}>       
                <div className={css.boxItem}>
                <IoPerson size={16} />
                <p className={css.text}>{name}</p>
            </div>
            <div className={css.boxItem}>
                <MdPhone size={16} />
                <p className={css.text}>{number}</p>
                </div>
            </div>
            <button onClick={() => onDelete(id)}>Delete</button>
        </li>
    );
};

export default Contact;