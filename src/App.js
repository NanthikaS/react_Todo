import React from 'react';
import './App.css';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';
import Todo from './Components/Todo';

function App() {
  return (
    <div className="todo-app">
      <TodoList/>
    </div>
  );
}

export default App;
