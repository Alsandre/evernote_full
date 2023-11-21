import React from 'react'
import "./styles/evernote.css"
import NotesDashboard from '../components/notesDashbouard/NotesDashboard'
import ScratchPad from '../components/scratchPad/ScratchPad'
import CurrentDate from '../components/date/CurrentDate'
import UploadsDash from '../components/uploadsDash/UploadsDash'
import SideBar from "../components/SideBar/SideBar"


export default function Evernote() {

  return (
    <>
        <SideBar />
        <div className='main_container'>
        <CurrentDate />
          
            <div className='main_container_bg' />
              
            <div className='top_widgets'>
              <NotesDashboard />
              
              <ScratchPad />
            </div> 

            <UploadsDash /> 
          
        </div>
    </>
  )
}
