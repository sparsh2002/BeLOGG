import React from 'react'
import logo from '../assets/images/logo.png'
import HomeIcon from "@material-ui/icons/Home";
import { Button } from '@material-ui/core';
import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import {
    AssignmentTurnedInOutlined,
    // HomeIcon,
    // FeaturedPlayListOutlinedIcon,
    NotificationsOutlined,
    PeopleAltOutlined,
    Search,
    // ExpandMore,
  } from "@material-ui/icons";
import { Avatar } from '@material-ui/core';
import './css/BeloggHeader.css'
function BeloggHeader() {
  return (
    <div className='bHeader'>
        <div className='bHeader-content'>
            <div className='bHeader-logo'>
                <img src={logo} alt='logo' />
            </div>
                <div className='bHeader-icons'>
                    <div className='bHeader-icon'><HomeIcon /></div>
                    <div className='bHeader-icon'><FeaturedPlayListOutlinedIcon/></div>
                    <div className='bHeader-icon'><AssignmentTurnedInOutlined /></div>
                    <div className='bHeader-icon'><PeopleAltOutlined /></div>
                    <div className='bHeader-icon'><NotificationsOutlined /></div>
                </div>
           
            <div className='bHeader-input'>
              <Search/>
              <input type='text' placeholder='Search Topics' />
            </div>
            <div className='bHeader_Rem'>
              <Avatar />
            </div>
            <Button>Add Topic</Button>
        </div>
    </div>
  )
}

export default BeloggHeader