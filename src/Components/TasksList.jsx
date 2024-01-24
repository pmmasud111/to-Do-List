import React, { useState } from "react";
import AddTasks from "./AddTasks.jsx";
import { initialTasks } from "./Data.js";
import Tasks from "./Tasks.jsx";

export default function TasksList() {
  const [tasks, setTasks] = useState(initialTasks);

  const getNextId = (data) => {
    const nextId = data.reduce((prev, current) =>
      prev && prev.id > current.id ? prev.id : current.id
    );
    return nextId + 1;
  };
  const handleAddTask = (text) => {
    setTasks([...tasks, { id: getNextId(tasks), text: text, done: false }]);
  };

  const handleChangeTask = (task) => {
    const nextTask = tasks.map((t) => {
      if (t.id === task.id) {
        return task;
      } else {
        return t;
      }
    });
    setTasks(nextTask);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((t) => t.id !== taskId));
  };
  return (
    <ul>
      <AddTasks onAdd={handleAddTask} />
      {tasks?.map((task) => (
        <Tasks
          key={task?.id}
          task={task}
          onChangeTask={handleChangeTask}
          onDeleteTask={handleDeleteTask}
        />
      ))}
    </ul>
  );
}
