import React from 'react'
import './billingAddress.css'

const BilllingShippingAddress = () => {
  return (
   
    <div className='Address'>
        <div className='content'>
      <div className='billing'>
        <p>Billing Address</p>

       <div className='input'><label htmlFor="country">Country</label>
       <input type="text" /></div> 
       <div className='input'><label htmlFor="zipCode">Zip code</label>
       <input type="text" /></div> 
       <div className='input'><label htmlFor="state">State</label>
       <input type="text" /></div> 
       <div className='input'><label htmlFor="City">City</label>
       <input type="text" /></div> 
       <div className='input'><label htmlFor="street">Street</label>
       <input type="text" /></div> 
        <div className='checkbox'>
       <input type="checkbox" name="" id="" />
       <label htmlFor="">Copy Billing Address</label></div>
       
      </div>

      
      <div className='shipping'>
        <p>Shipping Address</p>

       <div className='input'><label htmlFor="country">Country</label>
       <input type="text" /></div>

       <div className='input'><label htmlFor="zipCode">Zip code</label>
       <input type="text" /></div> 

       <div className='input'><label htmlFor="state">State</label>
       <input type="text" /></div>

       <div className='input'><label htmlFor="City">City</label>
       <input type="text" /></div> 

       <div className='input'><label htmlFor="street">Street</label>
       <input type="text" /></div> 

      </div>
      </div>
      <div className='save'>
      <div><button>Save</button></div>
      <div><button>Save & Next</button></div>
      </div>
      </div>
      
  )
}

export default BilllingShippingAddress
