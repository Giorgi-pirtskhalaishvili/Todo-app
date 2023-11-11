import React from "react";

function ToDoTask({ id, action, task }) {
  return (
    <div>
      <li>{id + " " + task}</li>
      <button onClick={() => action(id)}>DONE</button>
    </div>
  );
}

export default ToDoTask;
