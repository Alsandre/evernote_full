import React from 'react'
import "./SideBar.css"
import Search from '../Search/Search'
import AddNew from '../addNew/AddNew'
import SidebarLinkBlock from './SidebarLinkBlock'

import home from "../../utils/icons/home.webp"
import checkedGrey from "../../utils/icons/checkedGrey.webp"
import notesGrey from "../../utils/icons/notesGrey.webp"


export default function SideBar() {


  return (
    <div className='sidebar'>

        <div className='sidebar_top'>
          <Search />
          <AddNew />
        </div>

        <div className='sidebar_bottom'>
          <SidebarLinkBlock linkName='Home' icon={home}/>
          <SidebarLinkBlock linkName='Notes' icon={checkedGrey}/>
          <SidebarLinkBlock linkName='Tasks' icon={notesGrey}/>
        </div>
        
    </div>
  )
}
