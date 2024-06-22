import React, { useState } from 'react';
import axios from 'axios';
// import './TodoItem.css';
const TodoItem = ({ todo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [task, setTask] = useState(todo.task);
    const [status, setStatus] = useState(todo.status);
    const [deadline, setDeadline] = useState(todo.deadline);

    const updateTodo = () => {
        axios.put(`http://localhost:8000/updateTodo/${todo._id}`, { task, status, deadline })
            .then(response => {
                console.log('Todo updated:', response.data);
                setIsEditing(false);
            })
            .catch(error => console.error('Error updating todo:', error));
    };

    const deleteTodo = () => {
        axios.delete(`http://localhost:8000/deleteTodo/${todo._id}`)
            .then(response => console.log('Todo deleted:', response.data))
            .catch(error => console.error('Error deleting todo:', error));
    };

    return (
        <div>
            {isEditing ? (
                <div>
                    <input 
                        type="text" 
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
                        value={deadline.split('T')[0]} // To display the date in the input field
                        onChange={(e) => setDeadline(e.target.value)} 
                    />
                    <button onClick={updateTodo}>Save</button>
                </div>
            ) : (
                <div>
                    <h3>{todo.task}</h3>
                    <p>Status: {todo.status}</p>
                    <p>Deadline: {new Date(todo.deadline).toLocaleDateString()}</p>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <button onClick={deleteTodo}>Delete</button>
                </div>
            )}
        </div>
    );
};

export default TodoItem;
