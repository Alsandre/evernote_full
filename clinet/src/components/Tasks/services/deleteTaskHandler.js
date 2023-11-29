import { useContext } from "react";
import { ProviderPass } from "../../Provider";
import axios from "axios";

export const deleteTaskHandler = () => {
  const { user, setTaskHandlerWork, setLoading } = useContext(ProviderPass);
  const taskDeletePath = import.meta.env.VITE_REACT_APP_TASK_DELETE

  const deleteHandler = async (elementId) => {
    setLoading(true);
    try {
      const res = await axios.delete(
        `${taskDeletePath + elementId}`,
        {
          params: { user: user.uid, taskId: elementId },
        },
        {
          withCredentials: true,
          headers: { "Content-type": "application/json" },
        }
      );
      
      setTaskHandlerWork(true);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return { deleteHandler };
};
