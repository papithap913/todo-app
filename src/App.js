import React, { useState } from 'react';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [filter, setFilter] = useState('all');

  const addTodo = () => {
    const newTodo = {
      id: Math.random(),
      task,
      description,
      status: 'not completed'
    };
    setTodos([...todos, newTodo]);
    setTask('');
    setDescription('');
  };

  const updateTodo = (id, newTask, newDescription, newStatus) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, task: newTask, description: newDescription, status: newStatus } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.status === 'completed';
    if (filter === 'not completed') return todo.status === 'not completed';
    return true;
  });

  return (
    <div>
      <h1>Todo List</h1>
      <input 
        placeholder="Task name" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
      />
      <input 
        placeholder="Description" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
      />
      <button onClick={addTodo}>Add Todo</button>

      <div>
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="not completed">Not Completed</option>
        </select>
      </div>

      <TodoList 
        todos={filteredTodos} 
        onUpdate={updateTodo} 
        onDelete={deleteTodo} 
      />
    </div>
  );
};

export default App;
