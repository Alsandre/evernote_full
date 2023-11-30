import React, { useContext } from 'react'
import { ProviderPass } from '../Provider'
import "./greetingName.css"
import { json } from 'react-router-dom'

export default function GreetingName() {
    const {currentUser} = useContext(ProviderPass)
    const name = JSON.parse(currentUser)

  return (
    <div className='GreetingName'>Hello, {name}</div>
  )
}
