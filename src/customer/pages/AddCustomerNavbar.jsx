import React from 'react'
import './addCustomerNavbar.css'

const AddCustomerNavbar = () => {
  return (
    <div className='navigation'>
      <div><input type="text" placeholder='Search'/></div>
      <div className='navigationButtons'>
        <div><button>Customers</button></div>
        <div><button>Billing & Shipping Address</button></div>
        <div><button>Contact</button></div>
      </div>
    </div>
  )
}

export default AddCustomerNavbar
