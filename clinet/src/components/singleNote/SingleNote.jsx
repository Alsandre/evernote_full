import React, { useState } from 'react'
import "./SingleNote.css"
import { Link } from 'react-router-dom'

export default function SingleNote({title, content, timeStamp, id, funName}) {

  return (
    <Link to={`/pages/NotePage/${id}`} className='singleNote' onClick={funName}>
        <div className='singleNote_inner'>
          
          <div className='note_title_desc'>
            <p className='single_note_title'>{title?.substring(0, 10)}</p>

            <p className='single_note_content' dangerouslySetInnerHTML={{ __html: content.length > 150 ? content.substring(0, 150)+ "..."  : content.substring(0, 150)}} />
          </div>

          <p className='time_stamp_note'>{timeStamp?.substring(0, 10)}</p>
        </div>
    </Link>
  )
}
