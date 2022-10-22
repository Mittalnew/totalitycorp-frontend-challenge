import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import "./CSS/widget.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
function Widget() {
  return (
    <div className='widget'>
    <div className='widget_top'>
     <div className='widget_header'>
        <h4>Linkedin news</h4>
        <InfoIcon/>
     </div>
       <div className='widget_body'>
        <ul className='widget_options'>
            <li>
                <h4>Slaying job search payment</h4>
                <p>5d ago * 720 readers</p>
            </li>
            <li>
                <h4>casinoamte to troza</h4>
                <p>2d ago * 920 readers</p>
            </li>
            <li>
                <h4>india top material</h4>
                <p>6d ago * 520 readers</p>
            </li>
            <li>
                <h4>MIT cate soul forever</h4>
                <p>3d ago * 800 readers</p>
            </li>
            <li>
                <h4>hotel sarching to web</h4>
                <p>5d ago * 1000 readers</p>
            </li>

        </ul>
       </div>
    </div>
      
       <div className='widget_bottom'>
        {/* <div className='widget_header'> */}
            {/* <h4>Today's top searches</h4> */}
            {/* <InfoIcon/> */}
        {/* </div> */}
         <div className='widget_body'>
            {/* <ul className='widget_options'>
                <li>
                    <h4>Leading with a heavy heat</h4>
                    <p>Key core</p>
                </li>
                <li>
                    <h4>What is metakey</h4>
                    <p>options by core</p>
                </li>
                <li>
                    <h4>Invayion with wold</h4>
                    <p>people may be</p>
                </li>
                <li>
                    <h4>loading with web</h4>
                    <p>server expected high</p>
                </li>
                <li>
                    <h4>shorter hour productivity</h4>
                    <p>1d ago 450 users</p>
                </li>
            </ul> */}
            <div className='footer_distance'>
                <a href="" >About</a>
                <a href="" >Accessibility</a>
                <a href="">Help Center</a>
            </div>
            <div className='footer_distance'>
                <a href="" className='second_row_link'>Privacy & Terms <span className='dropdown'><KeyboardArrowDownIcon/></span></a>
                <a href="">Ad Choices</a>
            </div>
            <div className='footer_distance'>
                <a href="" className='Third_row_link'>Advertising</a>
                <a href="">Business Services  <span className='dropdown'><KeyboardArrowDownIcon/></span></a>
            </div>
            <div className='footer_distance'>
                <a href="" className='second_row_link'>Get the LinkedIn app</a>
                <a href="">More</a>
            </div>
            <div className='footer_distance logo'>
                <span href="" className='linkedin_logo'><b>Linked</b> <img src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw=w240-h480-rw" className='linkedin_img'/></span>
                <span href="" className='copyright'> LinkedIn Corporation © 2022</span>
            </div>
         </div>
       </div>










    </div>
  )
}

export default Widget
