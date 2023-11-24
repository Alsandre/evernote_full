import React, { useEffect, useState, useRef } from 'react'
import "./ScratchPad.css"
import SmallTitleComponent from '../smallTitleComponent/SmallTitleComponent'

export default function ScratchPad() {

const scratchRef = useRef(null)
const [scratchValue, setScratchValue] = useState(JSON.parse(localStorage.getItem('scratchPad')) || '')

useEffect(()=>{
    localStorage.setItem('scratchPad', JSON.stringify(scratchValue))
    if(scratchRef.current.value.length === 0){
        localStorage.setItem('scratchPad', null)
    }
},[scratchValue])

const handeScratchPadValue = (e)=> {
    setScratchValue(e.target.value)
    
}

const pastedScratchPadValue = (e)=> {
    e.preventDefault()
    setScratchValue(e.clipboardData.getData('text'))
    
}

return (
    <div className='scratchPad'>

        <SmallTitleComponent title='SCRATCHPAD' />

        <div className='textarera_parent'>
            <textarea 
                ref={scratchRef}
                type='textarea' 
                name='scratchpad' 
                id='scratchpad' 
                placeholder='What do you think about Kiks?' 
                className='scratchpad_input' 
                value={scratchValue}
                onChange={handeScratchPadValue}
                onPaste={pastedScratchPadValue}
            />
        </div>

    </div>
  )
}
