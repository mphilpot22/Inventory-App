import React from 'react'
import { Link } from 'react-router-dom'
import './Aside.css'
const Aside = () => {
  return (
    <div className='aside'>
      <Link to='/add'>Add Item</Link>
      <Link to="/">Inventory</Link>
    </div>
  )
}

export default Aside