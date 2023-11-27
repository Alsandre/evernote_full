import React, { useContext, useEffect, useState } from "react";
import "./Tasks.css";
import { ProviderPass } from "../Provider";
import TaskSingleElement from "./TaskSingleElement";
import axios from "axios";
import Spinner from "../spinner/Sipnner";

export default function Tasks() {
  const { user, taskToggler } = useContext(ProviderPass);
  const [allTasksArray, setAllTasksArray] = useState([]);
  const [allTasksArrayReversed, setAllTasksArrayReversed] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeElement, setActiveElement] = useState(null);
  const [status, setStatus] = useState(null);

  const getAllTasksPath = import.meta.env.VITE_REACT_APP_GET_TASK;

  const getTasks = async () => {
    try {
      const res = await axios.get(getAllTasksPath, {
        params: { uid: user.uid },
        withCredentials: true,
      });
      console.log(res.data);
      setAllTasksArray(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    setLoading(true);

    if (taskToggler) {
      getTasks();
    }
  }, [taskToggler]);

  useEffect(() => {
    setAllTasksArrayReversed(allTasksArray.reverse());
  }, [allTasksArray]);

  const markAsComplete = async (elementId) => {
    setStatus(true);
    setLoading(true);
    try {
      await axios.post(
        `http://localhost:3300/updatetask/${elementId}`,
        {
          completed: status,
          user: user,
          taskId: activeElement,
        },
        {
          withCredentials: true,
          headers: { "Content-type": "application/json" },
        }
      );

      getTasks();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const deleteHandler = async (elementId) => {
    setLoading(true);
    setActiveElement(elementId)
    try {
       const res = await axios.delete(`http://localhost:3300/deletetask/${elementId}`, 
       {
        params: {user: user.uid,
        taskId: elementId}
      },
      {
        withCredentials: true,
        headers: { "Content-type": "application/json" },
      })
      setLoading(false);
      getTasks()
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }

  return (
    <div className={taskToggler ? "tasks" : "tasksDisabled"}>
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
                funName={() => (
                    (item.taskId), setActiveElement(item.taskId)
                )}
                deleteHandler={()=>(
                   deleteHandler(item.taskId)
                )}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
