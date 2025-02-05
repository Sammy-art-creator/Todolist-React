import React, { useState } from "react";
import "./components/index.css";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Función para manejar la entrada del teclado
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  // Función para eliminar una tarea
  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-container">
      <h1>ToDo List</h1>

      <input
        type="text"
        placeholder="What needs to be done?"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <div className="todo-list">
        {tasks.length === 0 ? (
          <p>No tasks, add a task</p>
        ) : (
          tasks.map((task, index) => (
            <div className="todo-item" key={index}>
              <span>{task}</span>
              <button
                className="delete-btn"
                onClick={() => handleDelete(index)}
              >
                X
              </button>
            </div>
          ))
        )}
      </div>

      {/* Texto que muestra la cantidad de tareas */}
      {tasks.length > 0 && (
        <p className="task-count">
          {tasks.length} {tasks.length === 1 ? "item left" : "items left"}
        </p>
      )}
    </div>
  );
};

export default TodoList;
