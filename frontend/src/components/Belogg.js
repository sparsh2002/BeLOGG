import React from 'react'
import BeloggHeader from './BeloggHeader'
import Feed from './Feed';
import Sidebar from './Sidebar';
import Widget from './Widget';
import './css/Belogg.css'
function Belogg() {
  return (
    <div className='belogg'>
        <BeloggHeader />
        <div className='belogg-contents'>
          <div className='belogg-content'>
              <Sidebar/>
              <Feed />
              <Widget />
          </div>
      </div>
    </div>
  )
}

export default Belogg