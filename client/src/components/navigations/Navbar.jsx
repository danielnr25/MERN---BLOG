import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='bg-white flex justify-between py-3 px-20'>
      <Link to='/'>
         <h1 className='font-bold tracking-wider text-2xl'>BLOG MERN</h1>
      </Link>
      <ul className='flex space-x-4'>
         <li>
            <Link to='/' className='text-xl font-semibold hover:text-indigo-600'>Inicio</Link>
         </li>
         <li>
            <Link to='/new' className='text-xl font-semibold hover:text-indigo-600'>Crear</Link>
         </li>
      </ul>
    </div>
  )
}

export default Navbar