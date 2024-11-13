import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, deleteTask, toggleTaskCompletion }) {
  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTaskCompletion={toggleTaskCompletion}
        />
      ))}
    </ul>
  );
}

export default TaskList;
