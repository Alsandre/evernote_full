import React from 'react'
import "./Container.css"

export default function Container(props) {
  return (
    <section className='container'>
        {props.children}
    </section>
  )
}
