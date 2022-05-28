import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import HomeIcon from "@material-ui/icons/Home";
import { Button, Input } from '@material-ui/core';
import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import {
    AssignmentTurnedInOutlined,
    // Close,
    // HomeIcon,
    // FeaturedPlayListOutlinedIcon,
    NotificationsOutlined,
    PeopleAltOutlined,
    Search,
    ExpandMore,
  } from "@material-ui/icons";
import { Avatar } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close'
import './css/BeloggHeader.css'
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css'
import axios from 'axios'
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { logout, selectUser } from "../feature/userSlice";
import { useDispatch, useSelector } from "react-redux";
function BeloggHeader() {
  const [isModalOpen, setisModalOpen] = useState(false)
  const [inputUrl, setInputUrl] = useState('')
  const [question , setQuestion] = useState('')
  const Close = (
    <CloseIcon />
  )
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const handleLogout = () => {
    if (window.confirm("Are you sure to logout ?")) {
      signOut(auth)
        .then(() => {
          dispatch(logout());
          console.log("Logged out");
        })
        .catch(() => {
          console.log("error in logout");
        });
    }
  };
  const handleSubmit = async () =>{
    const config ={
      headers:{
        "Content-Type" : "application/json"
      }
    }
    if(question!==""){
      const body = {
        questionName : question,
        questionUrl : inputUrl,
        user:user
      }
      await axios.post("/api/questions" , body , config)
      // await axios.post("http://192.168.1.4:80/api/questions" , body , config)
      .then((res)=>{
        console.log(res.data)
        alert(res.data.message)
        window.location.href = "/"
      }).catch(e =>{
        console.log(e)
        alert('Question cant be added')
      })
    }
  }
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
            <div className='bHeader-Rem'>
            <span onClick={handleLogout}>
            <Avatar src={user?.photo} />
          </span>
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
                  <h5>Add Question</h5>
                  <h5>Share Link</h5>
              </div>
              <div className='modal__info'>
                  <Avatar className='avatar' />
                  <div className='modal__scope'>
                    <PeopleAltOutlined />
                    <p>Public</p>
                    <ExpandMore />
                  </div>
              </div>
              <div className='modal__Field'>
                  <Input 
                  value = {question}
                  onChange={(e) => setQuestion(e.target.value)}
                  className='modal__fieldLink' type='text' placeholder="Start your question with 'What', 'How', 'Why', etc."/>
                  <div
                  style={{
                    display:'flex',
                    flexDirection:'column'
                  }}>
                    <input
                    value = {inputUrl}
                    onChange={(e) => setInputUrl(e.target.value)}
                    style={{
                      margin:"5px 0px",
                      border:'1px solid lightgrey',
                      padding:"10px",
                      outline:'2px solid #000'
                    }}
                     className='modal__fieldLink' type='text' 
                     placeholder='optional:include a image which gives a context'/>
                  {
                    inputUrl !== "" && <img
                    style ={{
                      height:"40vh",
                      objectFit:"contain"

                    }} 
                    src={inputUrl} alt='displayImage' />
                  }
                  </div>

              </div>
              <div className='modal__buttons'>
                <button className='cancle' onClick={()=>setisModalOpen(false)}>
                  Cancel
                </button>
                <button onClick = {handleSubmit} type='submit' className='add' >
                  Add Question
                </button>
              </div>
            </Modal>
        </div>
    </div>
  )
}

export default BeloggHeader