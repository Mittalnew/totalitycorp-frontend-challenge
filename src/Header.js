import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "./CSS/header.css"
import Headeroptions from './Headeroptions';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Header() {
  return (
    <div className="header">
     <div className="header_left">
        <div className="header_logo">
           <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"/>
        </div>
        <div className="header_search">
            <SearchIcon/>
            <input type="text" placeholder="Search" className='search_input'/>
        </div>
     </div>
      
        <div className="header_right">
           <Headeroptions Icon={HomeIcon} title="Home"/>
           <Headeroptions Icon={PeopleAltIcon} title="My Network"/>
           <Headeroptions Icon={BusinessCenterIcon} title="Jobs"/>
           <Headeroptions Icon={MessageIcon} title="Messaging"/>
           <Headeroptions Icon={NotificationsIcon} title="Notification"/>
           <Headeroptions AccountCircleIcon={AccountCircleIcon}title="mittal"/>
        </div>
    </div>
  )
}

export default Header
