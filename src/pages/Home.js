import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import AppsIcon from "@material-ui/icons/Apps"
import {Avatar} from "@material-ui/core";
import Search from "./Search";
function Home() {
    return (
        <div className='home'>
            <div className='home_header'>
                 <div className='home_headerLeft'>
<Link to='/about'>about</Link>
<Link to='/store'>store</Link>
                 </div>
                  <div className='home_headerRight'>
                  <Link to='/gmail'>Gmail</Link>
                  <Link to='/images'>Images</Link>
                 <AppsIcon/>
                 <Avatar/>
                  </div>
            </div>     
            <div className='home_body'>
<img src="https://pngimg.com/uploads/google/google_PNG19644.png" alt=""></img>
        
      <div className="home_input">
          <Search/>
      </div>
        </div></div>
    )
}

export default Home
