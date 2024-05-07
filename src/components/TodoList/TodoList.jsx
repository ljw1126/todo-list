import React, {useState} from "react";
import AddTodo from "../AddTodo/AddTodo";
import TodoItem from "../Todo/TodoItem";


export default function TodoList({filter}) {
    const [todos, setTodos] = useState(initData);

    const handleAdd = (todo) => {
        setTodos([...todos, todo]);
    }

    const handleUpdate = (updated) => {
        setTodos(todos.map(t => t.id === updated.id ? updated : t));
    }
    const handleDelete = (deleted) => {
        setTodos(todos.filter(t => t.id !== deleted.id));
    };

    const filtered = getFilteredItems(todos, filter)

    return (
        <section>
            <ul>
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

const initData = [
    {
        id: '1',
        text: '장보기',
        status: 'active'
    },
    {
        id: '2',
        text: '공부하기',
        status: 'active'
    }
];

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
