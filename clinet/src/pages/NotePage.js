import React, {useEffect, useContext, useState} from 'react'
import { ProviderPass } from "../components/Provider"
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios"
import SideBar from "../components/SideBar/SideBar"
import "./styles/notePage.css"
import CreateButton from '../components/createButton/CreateButton'

export default function NotePage() {

    const { id } = useParams()
    const { user } = useContext(ProviderPass)

    const [loading, setLoading] = useState(false)
    const [noteContent, setNoteContent] = useState()
    const navigate = useNavigate()

    useEffect(()=>{
        setLoading(true)
        const getSingleNote = async ()=>{
            try {
                const res = await axios.get(`http://localhost:3300/notes/${id}`, 
                {params: { noteId: id, uid: user.uid }, withCredentials:true})
                setLoading(false)
                setNoteContent(res.data[0])
            } catch (error) {
                setLoading(false)
                console.log(error);
            }
        }

        getSingleNote()

    },[])

    const handleDeleteNote = async () => {

        try {
            const res = await axios.delete(`http://localhost:3300/notes/deletenote/${id}`, 
            {params: { noteId: id, uid: user.uid }, withCredentials:true})
            
            alert(res.data)
            navigate('/pages/Evernote')
        } catch (error) {
            console.log(error);
        }

    }

  return (
    <>
        <SideBar />

        {loading ? <p className='single_note_loading'>Loading Note...</p>
                 : <div className='single_note_page'>
                        <div className='single_note_body'>
                            <p className='single_note_header'>{noteContent?.noteTitle}</p>

                            <div className='' dangerouslySetInnerHTML={{ __html: noteContent?.content }} />
                        </div>

                        <div className='buttons_for_singleNote'>
                            <CreateButton text='Update'/>
                            <CreateButton text='Fuck It' funName={handleDeleteNote}/>
                        </div>
                   </div>
        }
    </>
  )
}
