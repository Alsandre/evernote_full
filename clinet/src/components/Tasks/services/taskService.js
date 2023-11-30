import { useContext, useEffect, useState } from "react";
import { ProviderPass } from "../../Provider";
import axios from "axios";

export const GetTaskService = () => {
  const { user, taskHandlerWork, setTaskHandlerWork, setLoading } = useContext(ProviderPass);
  const [allTasksArray, setAllTasksArray] = useState([]);
  const [allTasksArrayReversed, setAllTasksArrayReversed] = useState([]);
  const getAllTasksPath = import.meta.env.VITE_REACT_APP_GET_TASK;

  const getTasks = async () => {
    setLoading(true);
    try {
      const res = await axios.get(getAllTasksPath, {
        params: { uid: user.uid },
        withCredentials: true,
      });
      setAllTasksArray(res.data);
      setLoading(false);
      setTaskHandlerWork(false);
      console.log('i am');
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
    
  };

  useEffect(() => {
    setAllTasksArrayReversed(allTasksArray.reverse());
  }, [allTasksArray]);

  useEffect(() => {
    if(taskHandlerWork === true){
      getTasks();
    }

    // eslint-disable-next-line
  }, [taskHandlerWork]);

  useEffect(() => {
      getTasks();
      // eslint-disable-next-line
  }, []);
  

  return {
    getTasks,
    allTasksArrayReversed
  };
};
