import React from "react";
import './Header.css';
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";

function Header() {
    return (
        <div className="header">
            <div className="header__left">
            <MenuIcon/>
          
            {/*<h1>I am a Header</h1>*/}
            <img className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png" />
               </div>



            <div className="header__input">
            <input placeholder ="Search" type="text"/>
            <SearchIcon className="header__inputButton"/>
            </div>

         

        <div className="header__icons">

        <VideoCallIcon className="header__icon"/>
         <AppsIcon className="header__icon"/>
         <NotificationsIcon  className="header__icon"/>
          <Avatar alt="viren"
          
          src="https://lh3.googleusercontent.com/ogw/ADGmqu9NzokfzHIGuBzEHFWTBhqARNY--z_98vcJ--Zq=s83-c-mo"/>
        </div>

         

        
         
     
            
        </div>
    );
}

export default Header;     

{/*rfce to get the cwhole components*/}
