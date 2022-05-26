import { Avatar } from '@material-ui/core'
import React from 'react'
import './css/BeloggBox.css'
function Beloggbox() {
  return (
    <div className='beloggBox'>
        <div className='beloggBox-info'>
            <Avatar />
        </div>
        <div className='beloggBox_belogg'>
            <p>What's in your mind?</p>
        </div>
    </div>
  )
}

export default Beloggbox