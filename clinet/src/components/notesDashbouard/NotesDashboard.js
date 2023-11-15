import React from 'react'
import "./NotesDashboard.css"
import SmallTitleComponent from "../smallTitleComponent/SmallTitleComponent"
import SingleNote from '../singleNote/SingleNote'

const namesArray = [
  'Alice',
  'Bob',
  'Charlie',
  'David',
  'Emma',
  'Frank',
  'Grace',
  'Henry',
  'Ivy',
  'Jack',
  'Kate',
  'Liam',
  'Mia',
  'Noah',
  'Olivia',
  'Paul',
  'Quinn',
  'Ryan',
  'Sophia',
  'Tyler'
];

export default function NotesDashboard() {
  return (
    <div className='notes_dashboard'>
      <SmallTitleComponent title='NOTES'/>

      <div className='notes_container'>

        {namesArray.map((name)=>{
          return(
            <SingleNote title={name}/>
          )
        })}

       
      </div>
    </div>
  )
}
