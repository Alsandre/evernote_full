import React from 'react'
import './Search.css'

import searchIcon from "../../utils/icons/search.webp"

export default function Search() {
  return (
    <div className='search'>
        <input type='text' name='search' id='search' placeholder='Search' />

        <img className='search_icon' src={searchIcon} alt='search' />
    </div>
  )
}
