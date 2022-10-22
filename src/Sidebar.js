import React from 'react'
import "./CSS/sidebar.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Sidebar() {
  return (
    <div className='sidebar'>
    <div className='sidebar_profile'>
        <img src="https://png.pngtree.com/background/20210715/original/pngtree-neon-light-background-picture-image_1296131.jpg"/>

        <div className='profile_details'>
             <AccountCircleIcon/>
           <h4>Mittal Singh</h4>
           <p className='text-size'>front end developer</p>

        </div>

           <div className='profile_stats'>
               <span>Who Viewed your profile</span>
               <span className='stat_number'>20</span>
           </div>
           <div className='profile_stats'>
               <span>Connection<br/><b>Grow your network</b></span>
               <span className='stat_number'>150</span>
           </div>

    </div>
      
           <div className='sidebar_recent'>
            <p>Recent</p>
            <p className='hash'><span>#</span>HTML</p>
            <p className='hash'><span>#</span>CSS</p>
            <p className='hash'><span>#</span>JavaScript</p>
            <p className='hash'><span>#</span>React.js</p>
            <p className='hash'><span>#</span>Github</p>
            <p className='hash'><span>#</span>Firebase</p>
           </div>








    </div>
  )
}

export default Sidebar
