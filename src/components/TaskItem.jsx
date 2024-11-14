import React, { useState } from "react";

function TaskItem({ task, deleteTask, toggleTaskCompletion }) {
  const [completed, setCompleted] = useState(task.completed);
  const [deleting, setDeleting] = useState(false);

  const handleMarkComplete = () => {
    toggleTaskCompletion(task.id);
    setCompleted(!completed);
  };

  const handleDelete = () => {
    setDeleting(true);
    setTimeout(() => deleteTask(task.id), 300); // Wait for animation before deleting
  };

  return (
    <li className="glass-card w-full rounded-lg shadow-lg text-white p-2 flex items-center relative">
      {/* Checkmark Animation when Completed */}
      {completed && (
        <div className="flex-shrink-0 mr-2">
          <svg
            className="w-10 h-10 animate-checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 133 133"
          >
            <circle fill="#000000" cx="66.5" cy="66.5" r="54.5" />
            <circle fill="#FFFFFF" cx="66.5" cy="66.5" r="55.5" />
            <circle
              stroke="#000000"
              strokeWidth="4"
              cx="66.5"
              cy="66.5"
              r="54.5"
            />
            <polyline
              stroke="#FFFFFF"
              strokeWidth="5.5"
              points="41 70 56 85 92 49"
              className="checkmark"
            />
          </svg>
        </div>
      )}

      {/* Priority and Task Content */}
      <div className="flex-1 cursor-pointer" onClick={handleMarkComplete}>
        {/* Priority Tag */}
        <span
          className={`block text-xs font-semibold px-2 py-1 rounded capitalize w-fit ${getPriorityColor(
            task.priority
          )}`}
        >
          {task.priority}
        </span>

        {/* Task Title */}
        <span
          className={`block break-words mt-1 ${
            completed ? "line-through text-gray-500" : ""
          }`}
        >
          {task.title}
        </span>
      </div>

      {/* Delete Button with Animation */}
      <button
        onClick={handleDelete}
        className={`text-red-500 ml-4 hover:text-red-700 ${
          deleting ? "animate-ping" : ""
        } align-middle`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </li>
  );
}

// Helper function to get priority color
function getPriorityColor(priority) {
  switch (priority) {
    case "high":
      return "bg-red-200 text-red-800";
    case "medium":
      return "bg-yellow-200 text-yellow-800";
    case "low":
      return "bg-green-200 text-green-800";
    default:
      return "";
  }
}

export default TaskItem;
