import { useContext } from "react";
import { ProviderPass } from "../../Provider";
import axios from "axios";

export const CompleteHandler = () => {
  const { user, setTaskHandlerWork, setLoading } = useContext(ProviderPass);
  const taskUpdatePath = import.meta.env.VITE_REACT_APP_TASK_UPDATE;

  const markAsComplete = async (elementId) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${taskUpdatePath + elementId}`,
        {
          completed: true,
          user: user,
          taskId: elementId,
        },
        {
          withCredentials: true,
          headers: { "Content-type": "application/json" },
        }
      );

      if (res.status === 200) {
        setTaskHandlerWork(true);
      }

     
    } catch (error) {
      console.log(error);
      setLoading(false);
    }

  };

  return {
    markAsComplete,
  };
};
