import React, { useContext, useEffect, useState } from "react";
import "./Tasks.css";
import { ProviderPass } from "../Provider";
import axios from "axios";

const GetTasksModule = () => {
  const { user } = useContext(ProviderPass);
  const [allTasksArray, setAllTasksArray] = useState([]);
  const [allTasksArrayReversed, setAllTasksArrayReversed] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setAllTasksArrayReversed(allTasksArray.reverse());
  }, [])
 

  useEffect(() => {
    setAllTasksArrayReversed(allTasksArray.reverse());
  }, [allTasksArray]);

  return {
    allTasksArrayReversed,
    loading,
    // getTasks,
    setLoading,
    logHero
  };
};

export default GetTasksModule;
