
import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <div className='home_title'>Song database</div>
      <div className='home_links'>
        <Link to="/songs" className='home_link'>See All Songs</Link>
        <Link to="/song" className='home_link'>Get Song detail</Link>
      </div>
    </div>
  )
}

export default Home
