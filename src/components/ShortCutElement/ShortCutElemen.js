import React from 'react'
import "./ShortCutElemen.css"

export default function ShortCutElemen({cName, firsIco, text, secIco, funName}) {
  return (
    <div className={cName} onClick={funName}>
            
        <div className='inner_container'>
            <img src={firsIco} alt='first icon' className='first_icon' />
            <p>{text}</p>
        </div>

        { secIco ? <img src={secIco} alt='second icon' className='second_icon' /> : <></> }
    </div>
  )
}


