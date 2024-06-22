import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';
// import './TodoList.css';
const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/getTodo')
            .then(response => setTodos(response.data.Response))
            .catch(error => console.error('Error fetching todos:', error));
    }, []);

    return (
        <div>
            <h1>Todo List</h1>
            {todos.map(todo => (
                <TodoItem key={todo._id} todo={todo} />
            ))}
        </div>
    );
};

export default TodoList;
