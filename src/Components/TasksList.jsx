import React, { useReducer } from "react";
import AddTasks from "./AddTasks.jsx";
import { initialTasks } from "./Data.js";
import TaskReducer from "./TaskReducer.js";
import Tasks from "./Tasks.jsx";

export default function TasksList() {
  const [tasks, dispatch] = useReducer(TaskReducer, initialTasks);

  const getNextId = (data) => {
    const nextId = data.reduce((prev, current) =>
      prev && prev.id > current.id ? prev.id : current.id
    );
    return nextId + 1;
  };
  const handleAddTask = (text) => {
    dispatch({
      type: "added",
      text,
      id: getNextId(tasks),
    });
  };

  const handleChangeTask = (task) => {
    dispatch({
      type: "changed",
      task,
    });
  };

  const handleDeleteTask = (taskId) => {
    dispatch({
      type: "deleted",
      id: taskId,
    });
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
