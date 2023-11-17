import React from 'react'
import "./SideBar.css"
import { Link } from 'react-router-dom'

export default function SidebarLinkBlock({icon, linkName, path}) {
  return (
    <Link to={path} className='sidebar_link_block'>
        <div className='block_link_icon_name'>
          <img src={icon} alt='sidebar link blcok' className='sidebar_link_icon' />
          <p>{linkName}</p>
        </div>
    </Link>
  )
}
