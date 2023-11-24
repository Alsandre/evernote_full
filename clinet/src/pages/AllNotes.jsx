import React, { useEffect, useState, useContext } from "react";
import { ProviderPass } from "../components/Provider";
import axios from "axios";
import "./styles/allnotes.css";
import SideBar from "../components/SideBar/SideBar";
import SingleNote from "../components/singleNote/SingleNote";
import Container from "../components/container/Container";
import Tasks from '../components/Tasks/Tasks'
import CreateTask from "../components/Tasks/CreateTask"

export default function AllNotes() {
  const { user } = useContext(ProviderPass);

  const [notesArray, setNotesArray] = useState([]);
  const [notesArrayReversed, setNotesArrayReversed] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getNotes = async () => {
      setLoading(true);

      try {
        const res = await axios.get("http://localhost:3300/getnotes", {
          params: { uid: user.uid },
          withCredentials: true,
        });
        setNotesArray(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    getNotes();
  }, []);

  useEffect(() => {
    setNotesArrayReversed(notesArray.reverse());
  }, [notesArray]);

  return (
    <Container>
      <SideBar />
      <Tasks />
      <CreateTask />
      <div className="allnotes">
        {notesArrayReversed?.map((note) => {
          return (
            <SingleNote
              key={note.noteId}
              title={note.noteTitle}
              content={note.content}
              timeStamp={note.timeStamp}
              id={note.noteId}
            />
          );
        })}
      </div>
    </Container>
  );
}
