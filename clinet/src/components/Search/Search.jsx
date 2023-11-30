import React, { useEffect, useState, useContext } from 'react'
import { ProviderPass } from '../Provider'
import axios from "axios"
import './Search.css'

import searchIcon from "../../utils/icons/search.webp"
import SearchedItem from './searchedItem'

export default function Search() {
  const { searchStatus, setSearchStatus } = useContext(ProviderPass)
  const [searchedData, setSearchedData] = useState([])
  const [value, setValue] =useState('')
  const seatchNotePath = import.meta.env.VITE_REACT_APP_SEARCH_NOTE

  useEffect(()=>{
    if(value.length === 0) {
      setSearchStatus(false)
    }else{
      setSearchStatus(true)
    }
  },[value])

  const searchHandler = async (searchTerm)=>{
    try {
      const res = await axios(`${seatchNotePath + searchTerm}`)
      setSearchedData(res.data)
    } catch (error) {
      console.error('Error fetching search results', error)
    }
  }

  return (
    <div className='search'>
        <input type='text' name='search' id='search' placeholder='Search Note' onChange={(e)=> (searchHandler(e.target.value), setValue(e.target.value))}/>

        <img className='search_icon' src={searchIcon} alt='search' />

        <div className={value.length > 0 && searchStatus ? 'showSearchDash' : 'hideSearchDash'}>
          <SearchedItem data={searchedData} />
        </div>
        
    </div>
  )
}
