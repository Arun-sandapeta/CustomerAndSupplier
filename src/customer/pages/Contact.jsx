import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div >
        
      <div className='contact'>
      <div className='heading'><h3>Contact</h3></div>
        <div className='input'><label htmlFor="firstName">First Name</label>
        <input type="text" placeholder='Enter Here'/></div>
        <div className='input'><label htmlFor="lastname">Last Name</label>
        <input type="text" placeholder='Enter Here'/></div>
        <div className='input'><label htmlFor="email">Email</label>
        <input type="email" placeholder='Enter Here'/></div>
        <div className='input'><label htmlFor="phone">Phone Number</label>
        <input type="text" placeholder='Enter Here'/></div>
        <div className='input'><label htmlFor="position">Position</label>
        <input type="text" placeholder='Enter Here'/></div>
        <div className='input'><label htmlFor="direction">Direction</label>
        <input type="text" placeholder='Enter Here'/></div>
        <div className='input'><label htmlFor="password">Password</label>
        <input type="password" placeholder='Enter Here'/></div>
        
        
        <div className='btn'>
            <button>  Save    </button>
            <button>Next</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
