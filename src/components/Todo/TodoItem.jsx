import React from "react";
import {LuTrash2 as TrashCan} from "react-icons/lu";
export default function TodoItem({todo, onUpdate, onDelete}) {
    const {text, status} = todo;
    const handleChange = (e) => {
        const status = e.target.checked ? 'completed' : 'active';
        onUpdate({...todo, status});
    }

    const handleDelete = () => onDelete(todo);

    return (
        <li>
            <input type="checkbox" onChange={handleChange} checked={status === 'completed'}/>
            <label htmlFor="checkbox">{text}</label>
            <button onClick={handleDelete}><TrashCan/></button>
        </li>
    );
}
