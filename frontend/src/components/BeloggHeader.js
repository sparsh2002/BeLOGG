import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import HomeIcon from "@material-ui/icons/Home";
import { Button } from '@material-ui/core';
import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import {
    AssignmentTurnedInOutlined,
    // Close,
    // HomeIcon,
    // FeaturedPlayListOutlinedIcon,
    NotificationsOutlined,
    PeopleAltOutlined,
    Search,
    // ExpandMore,
  } from "@material-ui/icons";
import { Avatar } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close'
import './css/BeloggHeader.css'
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css'
function BeloggHeader() {
  const [isModalOpen, setisModalOpen] = useState(false)
  const Close = (
    <CloseIcon />
  )
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
            <Button onClick={() => setisModalOpen(true)}>Add Topic</Button>
            <Modal
            open = {isModalOpen}
            closeIcon = {Close}
            onClose = {() => setisModalOpen(false)}
            closeOnEsc
            center
            closeOnOverlayClick = {false}
            styles={{
              overlay:{
                height:"auto"
              }
            }}
            >
              <div className='modal__title'>
                  This is modal Title
              </div>
            </Modal>
        </div>
    </div>
  )
}

export default BeloggHeader