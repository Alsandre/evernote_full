import React, {useContext} from 'react'
import { ProviderPass } from '../Provider'
import "./SideBar.css"
import { Link } from 'react-router-dom'

export default function SidebarLinkBlock({icon, linkName, path, funName}) {
  const {setSideBarHandler} = useContext(ProviderPass)
  return (
    <Link to={path} className='sidebar_link_block' onClick={()=>(funName, setSideBarHandler(false))}>
        <div className='block_link_icon_name'>
          <img src={icon} alt='sidebar link blcok' className='sidebar_link_icon' />
          <p>{linkName}</p>
        </div>
    </Link>
  )
}
