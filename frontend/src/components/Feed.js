import React , {useEffect, useState} from 'react'
import Beloggbox from './Beloggbox'
import './css/Feed.css'
import Post from './Post'
import axios from 'axios'
function Feed() {
  const [posts , setPosts] = useState([])
  useEffect(() => {
    axios.get('/api/questions')
    // axios.get("http://192.168.1.4:80/api/questions")
    .then(res=>{
      console.log(res.data.reverse())
      setPosts(res.data)
    }).catch(e=>{
      console.log(e)
    })
  }, [])
  
  return (
    <div className='feed'>
        <Beloggbox />
        {
          posts.map((post,index) => <Post key={index} post={post} />)
        }
    </div>
  )
}

export default Feed