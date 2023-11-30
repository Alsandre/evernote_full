import React, { useContext, useState } from "react";
import "./Tasks.css";
import { ProviderPass } from "../Provider";
import TaskSingleElement from "./TaskSingleElement";
import { GetTaskService } from "./services/taskService";
import { CompleteHandler } from "./services/completeHandler";
import { DeleteTaskHandler } from "./services/deleteTaskHandler";
import Spinner from "../spinner/Sipnner";
import closeTaskIcon from "../../utils/icons/closeTaskIcon.webp" 

export default function Tasks() {
  const { taskToggler, loading, taskHandler } = useContext(ProviderPass);
  const [activeElement, setActiveElement] = useState(null);
  
  const { allTasksArrayReversed } = GetTaskService()
  const { markAsComplete } = CompleteHandler()
  const { deleteHandler } = DeleteTaskHandler()

  return (
    <div className={taskToggler ? "tasks" : "tasks tasksDisabled"}>
      <img src={closeTaskIcon} alt="task closer" className="task_closer" onClick={taskHandler} />
      <div className="task_elements">
        {loading ? (
          <Spinner />
        ) : (
          allTasksArrayReversed.map((item) => {
            return (
              <TaskSingleElement
                key={item.taskId}
                body={item.taskContent}
                nameOfClass={
                  (activeElement === item.taskId && "task_circle_filled") ||
                  (item.completed === "true" && "task_circle_filled")
                }
                bodyClass={
                  (activeElement === item.taskId && "task_single_element_body_completed") ||
                  (item.completed === "true" && "task_single_element_body_completed")
                }
                deleteHandler={() => (
                  setActiveElement(item.taskId), deleteHandler(item.taskId)
                )}
                completedHandler={() => (
                  setActiveElement(item.taskId), markAsComplete(item.taskId)
                )}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
