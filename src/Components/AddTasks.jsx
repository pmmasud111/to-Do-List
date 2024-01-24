import React, { useState } from "react";

export default function AddTasks({ onAdd }) {
  const [text, setText] = useState("");
  const handleChangeText = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <input
        placeholder="Add task"
        className="inpt"
        value={text}
        onChange={handleChangeText}
      />
      <button
        className="btn"
        onClick={() => {
          setText("");
          onAdd(text);
        }}
      >
        Add
      </button>
    </>
  );
}
