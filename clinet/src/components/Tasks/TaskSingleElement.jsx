import React from "react";
import trashCan from "../../utils/icons/delete.webp"

export default function TaskSingleElement({body, funName, nameOfClass, deleteHandler, completedHandler, bodyClass}) {
  return (
    <div className="task_single_element">
      <div className={`task_circle ${nameOfClass}`} onClick={completedHandler}/>
      <p className={`task_single_element_body ${bodyClass}`} onClick={completedHandler}>{body}</p>
      <img src={trashCan} alt="delete" className="task_trash" onClick={deleteHandler}/>
    </div>
  );
}
