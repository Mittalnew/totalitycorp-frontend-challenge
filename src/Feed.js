import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PhotoIcon from '@mui/icons-material/Photo';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AssignmentIcon from '@mui/icons-material/Assignment';
import "./CSS/feed.css"
import Post from "./Post";
 

function Feed() {
  return (
    <div className='feed'>
      <div className='feed_input'>
      <div className='feed_form'>
            <AccountCircleIcon/>
            <form>
                <input type="text" placeholder='start a post'/>
                <input type="submit"/>
            </form>
      </div>
    <div className='feed_options'>
        <div className='option'>
            <PhotoIcon style={{color:'#70b5f9'}}/>
            <span>Photo</span>
        </div>
        <div className='option'>
            <YouTubeIcon style={{color:'#7fc15e'}}/>
            <span>Video</span>
        </div>
        <div className='option'>
            <CalendarTodayIcon style={{color:'#e7a33e'}}/>
            <span>Event</span>
        </div>
        <div className='option'>
            <AssignmentIcon style={{color:'#fc9295'}}/>
            <span>Write Article</span>
        </div>
    </div>
  </div>
  
  <Post name="Mittal Singh" description="this is tuneing" message="Dr. Giesler provides statewide leadership for extension plant pathology programs in soybeans and turfgrass diseases. He is the team leader for the Extension .  " photoURL="https://i.pinimg.com/736x/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg"/>

  <Post name="Anjali Singh" description="this is tuneing" message="Google launched the Pixel Watch on its ‘Made By Google’ event, along with the Pixel 7 and Pixel 7 Pro. It seems that following the launch of the giant’s first smartwatch" photoURL="https://i.pinimg.com/736x/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg"/>

  <Post name="Praveen Kumar" description="this is tuneing" message="let users read directly from their smartwatches. The report cited a Reddit user stating that she/he managed to access the Google News Play Store the launch of the giant’s first  " photoURL="https://i.pinimg.com/736x/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg"/>

  <Post name="Suraj Maurya" description="this is tuneing" message="Google’s WearOS 3 is already available on some smartwatches smartwatches. The report cited a Reddit user stating that she/he managed to access the Google News  " photoURL="https://i.pinimg.com/736x/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg"/>

  <Post name="Nisha" description="this is tuneing" message="Meanwhile, Google has unveiled Android 13 Go edition for 3 is already available on some smartwatches smartwatches. The report cited a Reddit user stating that " photoURL="https://i.pinimg.com/736x/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg"/>

  <Post name="Anamika" description="this is tuneing" message="This upgraded version of Android removes unnecessary apps from the smartphone and only includes the essentials. For instance, Google’s own apps Go edition for " photoURL="https://i.pinimg.com/736x/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg"/>
 

    </div>
  )
}

export default Feed
