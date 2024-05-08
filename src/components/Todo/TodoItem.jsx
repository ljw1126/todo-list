import React from "react";
import {LuTrash2 as TrashCan} from "react-icons/lu";
import styles from "./TodoItem.module.css";
export default function TodoItem({todo, onUpdate, onDelete}) {
    const {id, text, status} = todo;
    const handleChange = (e) => {
        const status = e.target.checked ? 'completed' : 'active';
        onUpdate({...todo, status});
    }

    const handleDelete = () => onDelete(todo);

    return (
        <li className={styles.todo}>
            <input type="checkbox"
                   className={styles.checkbox}
                   onChange={handleChange}
                   checked={status === 'completed'}
                   id={id}
            />
            <label htmlFor={id} className={styles.text}>{text}</label>
            <span className={styles.icon}>
                 <button className={styles.button} onClick={handleDelete}><TrashCan/></button>
            </span>
        </li>
    );
}
