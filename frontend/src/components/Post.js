import { Avatar} from '@material-ui/core'
import { ArrowDownwardOutlined, ArrowUpwardOutlined,  ChatBubbleOutlined,  MoreHorizOutlined,  RepeatOneOutlined, ShareOutlined } from '@material-ui/icons'
import React from 'react'
import './css/Post.css'
function Post() {
  return (
    <div className='post'>
        <div className='post__info'>
            <Avatar />
            <h4>User Name</h4>
            <small>Time Stamp</small>
        </div>
        <div className='post__body'>
            <p>This is a test post</p>
            <button className='post__btnAnswer'>Comments</button>
        </div>
        <div className='post__footer'>
            <div className='post__footerAction'>
                <ArrowUpwardOutlined />
                <ArrowDownwardOutlined />
            </div>
            <RepeatOneOutlined />
            <ChatBubbleOutlined />
            <div className='post__footerleft'>
                <ShareOutlined />
                <MoreHorizOutlined />
            </div>
        </div>
        <p style={{
          color: "rgba(0,0,0,0.5)",
          fontSize: "12px",
          fontWeight: "bold",
          margin: "10px 0",
        }}>1 answer</p>
        <div style={{
          margin: "5px 0px 0px 0px ",
          padding: "5px 0px 0px 20px",
          borderTop: "1px solid lightgray",
        }}
        className='post__answer'>
            <div style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                padding: "10px 5px",
                // borderTop: "1px solid lightgray",
              }}
              className='post-answer-container'>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#888",
                }}
                className='post-answered'>
                    <Avatar />
                    <div  style={{
                    margin: "0px 10px",
                  }} className='post-info'>
                        <p>
                            username    
                        </p>
                        <span>Time Stamp</span>
                    </div>
                </div>
                <div className='post-answer'>
                    This is test comment
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post