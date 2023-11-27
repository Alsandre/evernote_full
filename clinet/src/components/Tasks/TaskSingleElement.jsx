import React from "react";
import trashCan from "../../utils/icons/delete.webp"

export default function TaskSingleElement({body, funName, nameOfClass, deleteHandler}) {
  return (
    <div className="task_single_element" onClick={funName}>
      <div className={`task_circle ${nameOfClass}`} />
      <p>{body}</p>
      <img src={trashCan} alt="delete" className="task_trash" onClick={deleteHandler}/>
    </div>
  );
}
