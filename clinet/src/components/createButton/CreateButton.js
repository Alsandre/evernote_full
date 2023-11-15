import React from 'react'
import "./CreateButton.css"

export default function CreateButton({text}) {
  return (
    <div className='create_btn'>
        <p>{text}</p>
    </div>
  )
}
