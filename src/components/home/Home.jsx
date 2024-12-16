import React from 'react'

import { Link } from 'react-router-dom'
import FtnNavbar from '../FtnNavbar'
import FtnFooter from '../FtnFooter'





function Home() {
  return (
    <div>
       <FtnNavbar/> 
    <Link to='/Todo'>
        <button>todo</button>
        </Link>
        <Link to='/Countries'>
        <button>countries</button>
        </Link>
        <FtnFooter/>
    </div>
  )
}

export default Home