import { Avatar } from '@material-ui/core'
import React from 'react'
import './css/BeloggBox.css'
import {useSelector} from 'react-redux'
import { selectUser } from '../feature/userSlice'
function Beloggbox() {
  const user = useSelector(selectUser)
  return (
    <div className='beloggBox'>
        <div className='beloggBox-info'>
            <Avatar src={user?.photo} />
        </div>
        <div className='beloggBox_belogg'>
            <p>What's in your mind?</p>
        </div>
    </div>
  )
}

export default Beloggbox