import React from 'react';
import { useState } from 'react';
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import BookmarksRoundedIcon from "@material-ui/icons/BookmarksRounded";
import WatchLaterRoundedIcon from "@material-ui/icons/WatchLaterRounded";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import { NavLink, useHistory } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import './Sidebar.css'

import ishopIcon from '../../images/logo1.png'
import defaultImage from '../../images/user.png'


const iconStyle = (fontsize) => {
    return {
      fill: "transparent",
      stroke: "#1a1a2c",
      strokeWidth: 1,
      fontSize: fontsize,
    };
  };


const Sidebar = () => {
    const [sidebarActive, setSidebarActive] = useState(false);
    const user = true;

    const toggleSidebar = () =>{
        setSidebarActive((sidebarActive) => !sidebarActive)
    }
    return (
        <div className={`sidebar ${sidebarActive ? 'active' : ''}`}>
            <img 
                src={ishopIcon} 
                className='sidebarIcon' 
                alt="logo" 
                onClick={toggleSidebar}
            />
            <div className="sidebarMenu">
                <NavLink
                    to='/'
                    exact
                    className='sidebarMenuItem'
                    activeClassName='active'
                    data-tip='Home'
                    data-for='sidebarTooltip'
                    onClick={toggleSidebar}
                >
                    <HomeRoundedIcon 
                        className='sidebarMenuIcon'
                        style={iconStyle(36)}
                    />
                </NavLink>
                <NavLink
                    to='/cart'
                    exact
                    className='sidebarMenuItem'
                    activeClassName='active'
                    data-tip='Cart'
                    data-for='sidebarTooltip'
                    onClick={toggleSidebar}
                >
                    <ShoppingCartRoundedIcon 
                        className='sidebarMenuIcon'
                        style={iconStyle(34)}
                    />
                    <span className="sidebarItemValue">0</span>
                </NavLink>
                <NavLink
                    to='/bookmarks'
                    exact
                    className='sidebarMenuItem'
                    activeClassName='active'
                    data-tip='Bookmarks'
                    data-for='sidebarTooltip'
                    onClick={toggleSidebar}
                >
                    <BookmarksRoundedIcon 
                        className='sidebarMenuIcon'
                        style={iconStyle(30)}
                    />
                    <span className="sidebarItemValue">0</span>
                </NavLink>
                <NavLink
                    to='/orders'
                    exact
                    className='sidebarMenuItem'
                    activeClassName='active'
                    data-tip='Orders'
                    data-for='sidebarTooltip'
                    onClick={toggleSidebar}
                >
                    <WatchLaterRoundedIcon 
                        className='sidebarMenuIcon'
                        style={iconStyle(32)}
                    />
                </NavLink>
            </div>
            {user ? (
                <img
                src={defaultImage}
                alt='User'
                onClick={() => {
                //   history.push("/profile");
                  toggleSidebar();
                }}
                data-tip="My Account"
                data-for="sidebarTooltip"
                className="sidebarAvatar"
              />
            ) : (
                <NavLink
                    to='/login'
                    className='sidebarMenuItem'
                    activeClassName=""
                >

                </NavLink>
            )
        
        }
        </div>
    );
};

export default Sidebar;