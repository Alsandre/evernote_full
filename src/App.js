import React from 'react'
import { Routes, Route } from "react-router-dom"
import Evernote from "./pages/Evernote.js"
import CreateNote from './pages/CreateNote.js'
import SideBar from './components/SideBar/SideBar.js'

function App() {
  return (
    <>
    <SideBar />
    <Routes>
      <Route exact path='/' element={<Evernote />} />
      <Route exact path='/pages/CreateNote.js' element={<CreateNote />} />
    </Routes>

    </>
  )
}

export default App
