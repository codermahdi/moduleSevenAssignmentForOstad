import React, { useState } from "react";

const ToDoApp = () => {
  // State to store the list of tasks
  const [tasks, setTasks] = useState([]);

  // State to store the current task input
  const [taskInput, setTaskInput] = useState("");

  // Function to handle adding a new task
  const addTask = () => {
    if (taskInput.trim() === "") {
      return; // Prevent adding empty tasks
    }

    // Create a new task object with an ID and the input description
    const newTask = {
      id: Date.now(),
      description: taskInput.trim(),
      completed: false,
    };

    // Add the new task to the tasks list
    setTasks([...tasks, newTask]);

    // Clear the task input field
    setTaskInput("");
  };

  // Function to handle removing a task
  const removeTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  // Function to toggle task completion status
  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div>
      <div className="container col-md-6">
        <h1>ToDo App</h1>
        <div className="d-flex gap-2">
          <textarea
            name=""
            id=""
            cols="80"
            rows="3"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            placeholder="Enter a new task..."
          ></textarea>

          <button className="btn btn-primary" onClick={addTask}>
            Add Task
          </button>
        </div>
        <ul className="list-group my-3">
          {tasks.map((task) => (
            <li className="list-group-item" key={task.id}>
              <span
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                {task.description}
              </span>
              <span className="float-end">
                <button
                  className="btn btn-sm btn-success mx-2"
                  onClick={() => toggleTaskCompletion(task.id)}
                >
                  {task.completed ? "Undo" : "Complete"}
                </button>
                <button
                  className="btn btn-sm btn-danger mx-2"
                  onClick={() => removeTask(task.id)}
                >
                  Delete
                </button>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDoApp;
