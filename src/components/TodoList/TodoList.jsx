import React, {useEffect, useState} from "react";
import AddTodo from "../AddTodo/AddTodo";
import TodoItem from "../Todo/TodoItem";
import styles from "./TodoList.module.css";

export default function TodoList({filter}) {
    const [todos, setTodos] = useState(() => readTodos());

    const handleAdd = (todo) => {
        const data = [...todos, todo];
        setTodos(data);
    }

    const handleUpdate = (updated) => {
        const data = todos.map(t => t.id === updated.id ? updated : t);
        setTodos(data);
    }
    const handleDelete = (deleted) => {
        const data = todos.filter(t => t.id !== deleted.id);
        setTodos(data);
    };

    useEffect(() => {
        localStorage.setItem("todoItems", JSON.stringify(todos));
    }, [todos]);


    const filtered = getFilteredItems(todos, filter)

    return (
        <section className={styles.container}>
            <ul className={styles.list}>
                {
                    filtered.map(item => (
                        <TodoItem key={item.id} todo={item} onUpdate={handleUpdate} onDelete={handleDelete}/>
                    ))
                }
            </ul>
            <AddTodo onAdd={handleAdd}/>
        </section>
    );
}

function getFilteredItems(todos, filter) {
    if(filter === 'all') {
        return todos;
    }

    if(filter === 'active') {
        return todos.filter(t => t.status === 'active');
    }

    if(filter === 'completed') {
        return todos.filter(t => t.status === 'completed');
    }
}

function readTodos() {
    const todoItems = localStorage.getItem("todoItems");
    return todoItems ? JSON.parse(todoItems) : [];
}

