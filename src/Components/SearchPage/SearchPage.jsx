import React from 'react'
import { useSelector } from 'react-redux'
import GridPage from '../GridPage/GridPage'
import './search.css'

const SearchPage = () => {
    const {searchedData} = useSelector((initial)=>{
        return initial
    })
  return (
    <div>
       {searchedData.length!== 0 ? <div className='search'><GridPage gridData={searchedData}/></div> : <div className='search'><h2>No Data</h2></div>} 
        
    </div>
  )
}

export default SearchPage