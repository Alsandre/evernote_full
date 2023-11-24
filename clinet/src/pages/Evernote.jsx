import React from 'react'
import "./styles/evernote.css"
import NotesDashboard from '../components/notesDashbouard/NotesDashboard'
import ScratchPad from '../components/scratchPad/ScratchPad'
import CurrentDate from '../components/date/CurrentDate'
import UploadsDash from '../components/uploadsDash/UploadsDash'
import SideBar from "../components/SideBar/SideBar"
import Container from '../components/container/Container'
import Tasks from '../components/Tasks/Tasks'
import CreateTask from "../components/Tasks/CreateTask"

export default function Evernote() {

  return (
    <Container>
      <Tasks />
      <CreateTask />
      <SideBar />
      <div className='evernote'>
        <CurrentDate />
            <div className='main_container_bg' />
              
            <div className='top_widgets'>
              <NotesDashboard />
              <ScratchPad />
            </div> 

            <UploadsDash /> 
        </div>
    </Container>
  )
}
