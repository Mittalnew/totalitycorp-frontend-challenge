import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./CSS/post.css"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

function Post({name, description, message, photoURL}) {
  return (
    <div className='posts'>
      <div className='post_header'>
      <div className='post_headerLeft'>
      <AccountCircleIcon src={photoURL}/>
      <div className='post_profile_details'>
      <h3>{name}</h3>
      <p>{description}</p>
      </div>
   </div>
        <MoreVertIcon/>
      </div>
      
     <div className='post_body'>
        <p>{message}</p>
     </div>

    <div className='post_footer'>
       <div className='post_footer_option'>
           <ThumbUpIcon/>
           <span>Like</span>
       </div>
       <div className='post_footer_option'>
           <CommentIcon/>
           <span>Comment</span>
       </div>
       <div className='post_footer_option'>
           <ShareIcon/>
           <span>Share</span>
       </div>
       <div className='post_footer_option'>
           <SendIcon/>
           <span>Send</span>
       </div>
    </div>



    </div>
  )
}

export default Post










































// npm install @mui/material @emotion/react @emotion/styled









