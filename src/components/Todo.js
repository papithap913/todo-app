import React, { useState } from 'react';

const Todo = ({ todo, onUpdate, onDelete }) => {
  const [editing, setEditing] = useState(false);
  const [newTask, setNewTask] = useState(todo.task);
  const [newDescription, setNewDescription] = useState(todo.description);

  const handleUpdate = () => {
    onUpdate(todo.id, newTask, newDescription, todo.status);
    setEditing(false);
  };

  return (
    <div className="card">
      {editing ? (
        <>
          <input 
            value={newTask} 
            onChange={(e) => setNewTask(e.target.value)} 
          />
          <input 
            value={newDescription} 
            onChange={(e) => setNewDescription(e.target.value)} 
          />
          <button onClick={handleUpdate}>Save</button>
          <button onClick={() => setEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <h3>{todo.task}</h3>
          <p>{todo.description}</p>
          <span>Status: {todo.status}</span>
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={() => onDelete(todo.id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default Todo;
