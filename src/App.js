import React, { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("none");

  // Load tasks from localStorage
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  // Save tasks to localStorage
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  // Add a new task
  const addTask = (title, priority) => {
    const newTask = { id: Date.now(), title, completed: false, priority };
    setTasks([...tasks, newTask]);
  };

  // Delete a task by id
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle the task completion status
  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleSearchChange = (e) => setSearchQuery(e.target.value);
  const handleSortChange = (e) => setSortOrder(e.target.value);

  const filteredTasks = tasks
    .filter((task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "high") return a.priority === "high" ? -1 : 1;
      if (sortOrder === "medium") return a.priority === "medium" ? -1 : 1;
      if (sortOrder === "low") return a.priority === "low" ? -1 : 1;
      return 0;
    });

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-500 to-blue-900 relative overflow-hidden flex items-start justify-center">
      {/* Sun Rays Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-white/10 via-white/0 to-transparent opacity-40 pointer-events-none"></div>

      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4 bg-blue-900 bg-clip-text text-transparent w-fit">
          Task Manager
        </h1>
        <div className="flex place-content-between">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="mb-4 w-3/4 p-2 border border-gray-300 rounded"
          />

          {/* Sort Options */}
          <select
            value={sortOrder}
            onChange={handleSortChange}
            className="mb-4 w-1/5 p-2 border border-gray-300 rounded"
          >
            <option value="none">Sort by Priority</option>
            <option value="high">High Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="low">Low Priority</option>
          </select>
        </div>

        <TaskInput addTask={addTask} />
        <TaskList
          tasks={filteredTasks}
          deleteTask={deleteTask}
          toggleTaskCompletion={toggleTaskCompletion}
        />
      </div>
    </div>
  );
}

export default App;
