import React, { useState } from 'react';
import axios from 'axios';
// import './AddTodo.css';
const AddTodo = () => {
    const [task, setTask] = useState('');
    const [status, setStatus] = useState('Pending');
    const [deadline, setDeadline] = useState('');

    const addTodo = () => {
        axios.post('http://localhost:8000/createTodo', { task, status, deadline })
            .then(response => {
                console.log('Todo added:', response.data);
                setTask('');
                setStatus('Pending');
                setDeadline('');
            })
            .catch(error => console.error('Error adding todo:', error));
    };

    return (
        <div>
            <h2>Add Todo</h2>
            <input 
                type="text" 
                placeholder="Task" 
                value={task} 
                onChange={(e) => setTask(e.target.value)} 
            />
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
            </select>
            <input 
                type="date" 
                value={deadline} 
                onChange={(e) => setDeadline(e.target.value)} 
            />
            <button onClick={addTodo}>Add</button>
        </div>
    );
};

export default AddTodo;
