import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, onUpdate, onDelete }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo 
          key={todo.id} 
          todo={todo} 
          onUpdate={onUpdate} 
          onDelete={onDelete} 
        />
      ))}
    </div>
  );
};

export default TodoList;
