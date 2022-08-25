import { useState, useEffect } from 'react'
import './Subscriptions.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Subscriptions = () => {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos').then(res => setPhotos(res.data))
  }, [])
  return (
    <div className='subscribers-content'>
      <h1 className='subscribers'>Subscribers</h1>
      {photos.map(photo => (
        <li
          key={photo.id}
          className='subscribers-list'
        >
          {photo.url}
        </li>
      ))}
      <Link
        to={'/messages/new'}
        className=''
      ></Link>
    </div>
  )
}

export default Subscriptions
