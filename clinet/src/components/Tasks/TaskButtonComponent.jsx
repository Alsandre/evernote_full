import React from 'react'

export default function TaskButtonComponent({text, funName}) {
  return (
    <div className={text === 'Cancel' ? 'TaskButtonComponent' : 'TaskButtonComponentGreen'} onClick={funName}>
        {text}
    </div>
  )
}
