import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, deleteTask, toggleTaskCompletion }) {
  return (
    <div>
      {tasks.length === 0 ? (
        <div className="flex justify-center items-center h-64 bg-gradient-to-r animate-gradient-x text-white rounded-lg shadow-lg">
        <p className="text-xl font-semibold mx-2">No tasks yet! Add some tasks to get started.</p>
      </div>
      ) : (
        <ul className="space-y-2 transition-all duration-500 ease-in-out">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              toggleTaskCompletion={toggleTaskCompletion}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;
