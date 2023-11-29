import React, {useContext} from 'react'
import { ProviderPass } from '../Provider'
import "./SideBar.css"
import Search from '../Search/Search'
import AddNew from '../addNew/AddNew'
import SidebarLinkBlock from './SidebarLinkBlock'

import home from "../../utils/icons/home.webp"
import checkedGrey from "../../utils/icons/checkedGrey.webp"
import notesGrey from "../../utils/icons/notesGrey.webp"
import CreateButton from "../createButton/CreateButton"


export default function SideBar() {

  const {handleLogout, taskHandler, closeAllTaskElements, sidebarHandler} = useContext(ProviderPass)

  return (
    <div className={sidebarHandler ? 'sidebar sidebar_active' : 'sidebar'}>

        <div className='sidebar_top'>
          <Search />
          <AddNew />
        </div>

        <div className='sidebar_bottom'>
          <SidebarLinkBlock linkName='Home' icon={home} path='/pages/Evernote' funName={closeAllTaskElements} />
          <SidebarLinkBlock linkName='Notes' icon={checkedGrey} path='/pages/AllNotes' funName={closeAllTaskElements} />
          <SidebarLinkBlock linkName='Tasks' icon={notesGrey} funName={(taskHandler)}/>
        </div>

        <div className='logout_div'>
          <CreateButton text="Log Out" funName={handleLogout}/>
        </div>
        
    </div>
  )
}
