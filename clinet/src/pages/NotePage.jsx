import React, {useEffect, useContext, useState} from 'react'
import { ProviderPass } from "../components/Provider"
import { useNavigate, useParams, Link } from 'react-router-dom'
import axios from "axios"
import SideBar from "../components/SideBar/SideBar"
import "./styles/notePage.css"
import Container from "../components/container/Container"
import deleteIocn from "../utils/icons/delete.webp"
import updatePost from "../utils/icons/updatePost.webp"
import Tasks from '../components/Tasks/Tasks'
import CreateTask from "../components/Tasks/CreateTask"

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
    },[id, user.id])

    const handleDeleteNote = async () => {

        try {
            const res = await axios.delete(`http://localhost:3300/notes/deletenote/${id}`, 
            {params: { noteId: id, uid: user.uid }, withCredentials:true})
            
            alert(res.data)
            navigate('/pages/AllNotes')
        } catch (error) {
            console.log(error);
        }

    }

  return (
    <Container>
        <SideBar />
        <Tasks />
        <CreateTask />

        {loading ? <p className='single_note_loading'>Loading Note...</p>
                 : <div className='single_note_page'>
                        <div className='single_note_body'>
                            <p className='single_note_header'>{noteContent?.noteTitle}</p>

                            <div className='' dangerouslySetInnerHTML={{ __html: noteContent?.content }} />
                        </div>

                        <div className='buttons_for_singleNote'>
                            <Link to={`/pages/UpdateNote/${id}`}>
                                <img src={updatePost} alt='update' className='notes_icons' />
                            </Link>
                            <img src={deleteIocn} alt='update' className='notes_icons' onClick={handleDeleteNote}/>
                        </div>
                   </div>
        }
    </Container>
  )
}
