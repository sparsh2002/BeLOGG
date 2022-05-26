import React from 'react'
import Beloggbox from './Beloggbox'
import './css/Feed.css'
import Post from './Post'
function Feed() {
  return (
    <div className='feed'>
        <Beloggbox />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
    </div>
  )
}

export default Feed