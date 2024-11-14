import React, { useState } from "react";
import { TiPlus } from "react-icons/ti";

function TaskInput({ addTask }) {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("medium");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task, priority);
      setTask("");
      setPriority("medium");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2 mb-4">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task title"
        className="border p-2 rounded w-full"
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button
        type="submit"
        className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        <TiPlus />
      </button>
    </form>
  );
}

export default TaskInput;
