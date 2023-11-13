import React from 'react'
import "./SideBar.css"
import { Link } from 'react-router-dom'

export default function SidebarLinkBlock({icon, linkName}) {
  return (
    <Link to='/' className='sidebar_link_block'>
        <img src={icon} alt='sidebar link blcok' className='sidebar_link_icon' />
        <p>{linkName}</p>
    </Link>
  )
}
