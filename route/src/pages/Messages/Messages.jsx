import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Messages.css'

const Messages = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments').then(res => setPosts(res.data))
  }, [])
  return (
    <div className='messages-content'>
      <h1 className='messages'>Messages</h1>
      <Link
        to={'/messages/new'}
        className='btn-new'
      >
        New Message
      </Link>
      {posts.map(post => (
        <Link
          key={post.id}
          to={`/messages/${post.id}`}
        >
          <li className='messages-list'>{post.name}</li>
        </Link>
      ))}
    </div>
  )
}

export default Messages
