import React, { useState } from "react";

export default function Tasks({ task, onChangeTask, onDeleteTask }) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          className="inpt"
          value={task.text}
          onChange={(e) => onChangeTask({ ...task, text: e.target.value })}
        />
        <button onClick={() => setIsEditing(false)} className="btn">
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)} className="btn">
          Edit
        </button>
      </>
    );
  }
  return (
    <li>
      <label className="flex items-center">
        <input
          type="checkbox"
          className="checkbox"
          checked={task.done}
          onChange={(e) =>
            onChangeTask({
              ...task,
              done: e.target.checked,
            })
          }
        />
        {taskContent}
        <button className="btn" onClick={() => onDeleteTask(task.id)}>
          delete
        </button>
      </label>
    </li>
  );
}
