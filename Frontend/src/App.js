import React from 'react';
import TodoList from './Components/TodoList';
import AddTodo from './Components/AddTodo';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <AddTodo />
            <TodoList />
        </div>
    );
};

export default App;
