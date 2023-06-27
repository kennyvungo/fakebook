import React from 'react'
import "./profile.css"

const Bio = ({isShow}) => {
  return (
    <div className='bio'>
        <h1 className='intro'> 
            Intro
        </h1>
        {isShow && (
        <div className='addbio'>
            Add Bio
        </div>)}


    </div>
  ) 
}

export default Bio