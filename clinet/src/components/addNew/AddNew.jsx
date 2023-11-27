import React, { useState, useContext } from 'react'
import "./AddNew.css"
import ShortCutElemen from '../ShortCutElement/ShortCutElemen'

import addIco from "../../utils/icons/add.webp"
import dropDownArrow from "../../utils/icons/down-arrow.webp"
import checkedIco from "../../utils/icons/checked.webp"
import notes from "../../utils/icons/notes.webp"
import { ProviderPass } from '../Provider'

export default function AddNew() {
  const {CreateTaksHandler, closeAllTaskElements} = useContext(ProviderPass)

  const [dashClas, setDashClass] = useState('add_dashbouard')

  const dashTrigger = () => {
    setDashClass('add_dashbouard add_dashbouard_visible')
  }

  const resetDashTrigger = () => {
    setDashClass('add_dashbouard')
  }

  return (
    <div className='add_new'>

        <div >
          <ShortCutElemen cName='shortCut_element' firsIco={addIco} text='New' secIco={dropDownArrow} funName={dashTrigger}/>
        </div>
        
        <div className={dashClas} onMouseLeave={resetDashTrigger}>
          <ShortCutElemen 
              cName='shortCut_element' 
              firsIco={notes} text='Notes' 
              linkName='/pages/CreateNote'
          />


          <ShortCutElemen 
              cName='shortCut_element_task' 
              firsIco={checkedIco} 
              text='Task'
              funName={()=>{closeAllTaskElements(); CreateTaksHandler()}}
          />

        </div>

        
    </div>
  )
}
