import React from 'react'
import { useSelector } from 'react-redux'
import "./links.css"
import {AiOutlineMail} from 'react-icons/ai'
import {GrLinkedin} from 'react-icons/gr'
import {AiFillGithub} from 'react-icons/ai'
const Links = () => {
const sessionUser = useSelector(state => state.session.user)
const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  }
  return (
    <div className='linkwrapper'>
        <div className='linkprofilename'>
            <img className='linkprofilepic' src={sessionUser.avatar}/>
            {sessionUser.firstName} {sessionUser.lastName}
        </div>
        {/* <div className='linkemail'>
            <div className='linkico'>
            <AiOutlineMail/> 
            </div>
            kennyvungo@gmail.com
        </div> */}
        <div onClick={() => openInNewTab("https://www.linkedin.com/in/kennyvungo/")} className='linkedin'>
            <div className='linkico'>
           <GrLinkedin/> 
            </div>
           Linkedin
        </div>
        <div onClick={() => openInNewTab("https://github.com/kennyvungo")} className='github'>
            <div className='linkico'>
            <AiFillGithub/>
            </div>
            Github
        </div>
    
    
    
    </div>
  )
}

export default Links