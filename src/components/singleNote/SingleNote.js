import React from 'react'
import "./SingleNote.css"

export default function SingleNote({title}) {
  return (
    <div className='singleNote'>
        <div className='singleNote_inner'>
          
          <div className='note_title_desc'>
            <p>{title}</p>
            <p>desc</p>
          </div>

          <p>Timestamp</p>
        </div>
    </div>
  )
}
