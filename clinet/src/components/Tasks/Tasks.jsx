import React, { useContext, useState } from "react";
import "./Tasks.css";
import { ProviderPass } from "../Provider";
import TaskSingleElement from "./TaskSingleElement";
import { getTaskService } from "./services/taskService";
import { completeHandler } from "./services/completeHandler";
import { deleteTaskHandler } from "./services/deleteTaskHandler";
import Spinner from "../spinner/Sipnner";

export default function Tasks() {
  const { taskToggler, loading } = useContext(ProviderPass);
  const [activeElement, setActiveElement] = useState(null);
  
  const { allTasksArrayReversed } = getTaskService()
  const { markAsComplete } = completeHandler()
  const { deleteHandler } = deleteTaskHandler()

  return (
    <div className={taskToggler ? "tasks" : "tasks tasksDisabled"}>
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
