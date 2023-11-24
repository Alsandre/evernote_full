import React, { useContext, useEffect, useState } from "react";
import "./NotesDashboard.css";
import SmallTitleComponent from "../smallTitleComponent/SmallTitleComponent";
import SingleNote from "../singleNote/SingleNote";
import { ProviderPass } from "../Provider";
import axios from "axios";
import Spinner from "../spinner/Sipnner";

export default function NotesDashboard() {
  const { user } = useContext(ProviderPass);

  const [notesArray, setNotesArray] = useState([]);
  const [notesArrayReversed, setNotesArrayReversed] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getNotes = async () => {
      setLoading(true);
      console.log(user);
      try {
        const res = await axios.get("http://localhost:3300/getnotes", {
          params: { uid: user.uid },
          withCredentials: true,
        });
        setNotesArray(res.data.reverse());
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    getNotes();
  }, []);

  useEffect(() => {
    setNotesArrayReversed(notesArray);
  }, [notesArray]);

  return (
    <div className="notes_dashboard">
      <SmallTitleComponent title="NOTES" />

      <div className="notes_container">
        {loading ? (
          <Spinner />
        ) : notesArrayReversed.length === 0 ? (
          <p className="empty_notes_container">You Have No Notes</p>
        ) : (
          notesArrayReversed?.map((note) => {
            return (
              <SingleNote
                key={note.noteId}
                title={note.noteTitle}
                content={note.content}
                timeStamp={note.timeStamp}
                id={note.noteId}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
