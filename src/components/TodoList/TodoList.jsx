import React, {useState} from "react";
import AddTodo from "../AddTodo/AddTodo";
import TodoItem from "../Todo/TodoItem";


export default function TodoList() {
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

    return (
        <section>
            <ul>
                {
                    todos.map(item => (
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
]

