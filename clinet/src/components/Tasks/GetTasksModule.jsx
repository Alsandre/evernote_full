import React, { useContext, useEffect, useState } from "react";
import "./Tasks.css";
import { ProviderPass } from "../Provider";
import axios from "axios";

const GetTasksModule = () => {
  const { user } = useContext(ProviderPass);
  const [allTasksArray, setAllTasksArray] = useState([]);
  const [allTasksArrayReversed, setAllTasksArrayReversed] = useState([]);
  const [loading, setLoading] = useState(false);
  const getAllTasksPath = import.meta.env.VITE_REACT_APP_GET_TASK;

  useEffect(() => {
    setAllTasksArrayReversed(allTasksArray.reverse());
  }, []);

    //   const getTasks = async () => {
    //     setLoading(true)
    //     try {
    //       const res = await axios.get(getAllTasksPath, {
    //         params: { uid: user.uid },
    //         withCredentials: true,
    //       });
    //       setAllTasksArray(res.data);
    //       setLoading(false);
    //     } catch (error) {
    //       setLoading(false);
    //       console.log(error);
    //     }

    //     console.log('heyyyyy');
    //   };

    //   useEffect(()=>{
    //     getTasks()
    //   },[])
 

  useEffect(() => {
    setAllTasksArrayReversed(allTasksArray.reverse());
  }, [allTasksArray]);

  const logHero = ()=> {
    console.log(123);
  }

  return {
    allTasksArrayReversed,
    loading,
    // getTasks,
    setLoading,
    logHero
  };
};

export default GetTasksModule;
