import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const SearchBar = (props) => {

  return (
    <div>
        {
          <div className='mt-3 ms-5 '>
            <h3>Search For a Country</h3>
             <input onChange={(e)=> props.setUserInput(e.target.value)} placeholder='Enter Country Name'></input>
            
          </div>

        }
    </div>
  )
}
