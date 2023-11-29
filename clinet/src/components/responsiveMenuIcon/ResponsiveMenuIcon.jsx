import React, { useContext } from 'react'
import { ProviderPass } from '../Provider'
import menu from "../../utils/icons/delete.webp"
import "./responsiveMenuIcon.css"

export default function ResponsiveMenuIcon() {

    const {sidebarHandler,setSideBarHandler} = useContext(ProviderPass)

    const menuHandler = () => {
        if(sidebarHandler){
            setSideBarHandler(false)
        }else{
            setSideBarHandler(true)
        }
    }

  return (
    <div className='responsiveMenuIcon'>
        <img src={menu} alt='menu' className='menu_icon_responsive' onClick={menuHandler}/>
    </div>
  )
}
