import React from 'react'
import { Routes, Route } from "react-router-dom"
import Evernote from "./pages/Evernote"
import CreateNote from './pages/CreateNote'
import SignIn from './pages/SignIn'
import PrivateRoutes from './components/PrivateRoutes'
import NotePage from './pages/NotePage'

function App() {
  return (
    <div className='app'>
    <Routes>
    
      <Route exact path='/' element={<SignIn />} />
      

      <Route element={<PrivateRoutes/>}>
        <Route exact path='/pages/Evernote' element={<Evernote />} />
        <Route exact path='/pages/CreateNote' element={<CreateNote />} />
        <Route exact path='/pages/NotePage/:id' element={<NotePage />} />
      </Route>
    </Routes>

    </div>
  )
}

export default App
