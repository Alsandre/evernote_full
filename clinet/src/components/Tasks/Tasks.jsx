import React, { useContext, useEffect, useRef } from "react";
import "./Tasks.css";
import { ProviderPass } from "../Provider";
import TaskSingleElement from "./TaskSingleElement";
import axios from "axios";

export default function Tasks() {
  const { user, taskToggler } = useContext(ProviderPass)

  

  useEffect(()=>{
    const getTasks = async () => {
     try {
      const res = await axios.get(process.env.REACT_APP_GET_TASK,{
        params: { uid: user.uid },
        withCredentials: true,
      })
      console.log(res);
     } catch (error) {
      console.log(error);
     }
    }

    if(taskToggler){
      getTasks()
    }
    
  },[taskToggler])
  
  return (
    <div className={taskToggler ? "tasks" : "tasksDisabled"}>
      <div className="task_elements">
        <TaskSingleElement />
      </div>
    </div>
  );
}
