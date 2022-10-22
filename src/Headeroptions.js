import React from 'react'
import "./CSS/header.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Headeroptions({ Icon, title, AccountCircleIcon }) {
  return (
    <div className='header_options'>
    {
        Icon && <Icon></Icon>
    }
    {
        AccountCircleIcon && <AccountCircleIcon name={AccountCircleIcon}/>
    }   
     <span className='Header_title'>{title}</span>
    </div>
  )
}

export default Headeroptions
