import React from "react";

const ToDoItem = ({
  title,
  description,
  isCompleted,
  updateHandler,
  deletehandler,
  id,
}) => {
  return (
    <div className="todo">
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div>
        <input
          onChange={() => updateHandler(id)}
          type="checkbox"
          checked={isCompleted}
        />
        <button onClick={() => deletehandler(id)} className="btn">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ToDoItem;
