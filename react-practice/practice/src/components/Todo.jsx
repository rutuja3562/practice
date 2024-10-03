import React, { useState } from "react";
import "../styles/usecallbackcomp.css"; // Add a CSS file for custom styles
import { v4 as uuidv4 } from "uuid"; // Use uuid for unique id generation

export const UseCallBack = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({
    todo: "",
    id: "",
    status: false,
  });

  const handleChange = (e) => {
    setTodo((prev) => ({
      ...prev,
      todo: e.target.value,
    }));
  };

  const handleSubmitTodo = () => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { ...todo, id: uuidv4(), status: false }, // Use uuidv4 for unique id
    ]);
    setTodo({ todo: "", id: "", status: false }); // Reset input after submission
  };

  const toggleStatus = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todoItem) =>
        todoItem.id === id
          ? { ...todoItem, status: !todoItem.status }
          : todoItem
      )
    );
  };

  return (
    <div className="todo-container">
      <h2>Todo List</h2>
      <div className="input-container">
        <input
          type="text"
          value={todo.todo}
          onChange={handleChange}
          placeholder="Enter your todo..."
        />
        <button onClick={handleSubmitTodo}>Add Todo</button>
      </div>
      <div className="todos-list">
        {todos.map((todoItem) => (
          <div key={todoItem.id} className="todo-item">
            <p>{todoItem.todo}</p>
            <p>Status: {todoItem.status ? "Completed" : "Pending"}</p>
            <button onClick={() => toggleStatus(todoItem.id)}>
              Toggle Status
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
