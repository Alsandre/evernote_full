import React from 'react'
import { Routes, Route } from "react-router-dom"
import Evernote from "./pages/Evernote.js"

function App() {
  return (
    <>

    <Routes>
      <Route exact path='/' element={<Evernote />} />
    </Routes>

    </>
  )
}

export default App
