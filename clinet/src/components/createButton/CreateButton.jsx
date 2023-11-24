import React from 'react'
import "./CreateButton.css"

export default function CreateButton({text, funName}) {
  return (
    <div className={text === 'Fuck It' ? 'create_btn_red' : 'create_btn'} onClick={funName}>
        <p>{text}</p>
    </div>
  )
}
