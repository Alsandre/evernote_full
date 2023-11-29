import React, { useContext, useEffect, useState } from "react";
import { ProviderPass } from "../Provider";
import axios from "axios";
import TaskButtonComponent from "./TaskButtonComponent";

export default function CreateTask() {
  const {
    createTaks,
    setTaskHandlerWork,
    CloseCreateTask,
    user,
    closeAllTaskElements,
    loading,
    setLoading,
  } = useContext(ProviderPass);
  const [taskContent, setTaskContent] = useState("");
  const createTaskPath = import.meta.env.VITE_REACT_APP_CREATE_TASK;
  const [taskStatus, setTaskStatus] = useState("");

  const sendTask = async () => {
    if (taskContent.length > 0) {
      try {
        const res = await axios.post(
          createTaskPath,
          {
            taskContent: taskContent,
            completed: false,
            user: user,
          },
          {
            withCredentials: true,
            headers: { "Content-type": "application/json" },
          }
        );

        if (res.status === 200) {
          setTaskHandlerWork(true);
        }

        setTaskStatus(res.data);
        setTaskContent("");
      } catch (error) {
        console.log(error);
        setTaskStatus("Here Is Some Error");
      }
    } else {
      setTaskStatus("Enter Taks You Lazy..");
    }
  };

  const clearTaskStatus = () => {
    setTaskStatus("");
  };

  return (
    <div className={createTaks ? "create_task_bg" : "create_task_bg_disabled"}>
      <div className="create_task">
        <div className="taks_dot">
          <div className="task_circle" />
          <input
            type="text"
            className="task_input"
            id="taskInput"
            name="taksContent"
            placeholder="Enter Task Here"
            value={taskContent}
            onChange={(e) => setTaskContent(e.target.value)}
          />
        </div>

        <p
          className={
            taskStatus === "Task has been created successfully."
              ? "task_status"
              : "task_status_error"
          }
        >
          {taskStatus}
        </p>

        <div className="crt_tasks_btns">
          <TaskButtonComponent
            text="Cancel"
            funName={() => {
              closeAllTaskElements();
              clearTaskStatus();
            }}
          />
          <TaskButtonComponent text="Create Task" funName={sendTask} />
        </div>
      </div>
    </div>
  );
}
