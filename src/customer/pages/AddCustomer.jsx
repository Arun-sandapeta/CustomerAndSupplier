import React from 'react'
import './addCustomer.css'

const AddCustomer = () => {
  return (
    <div>
      <div className='customerForm'>
        <div className='input'>
        <label htmlFor="CompanyName">Company</label>
        <input type="text"  placeholder='Enter Here'/>
        </div>
        <div className="input">
            <label htmlFor="VAT" >VAT Number</label>
        <input type="text" placeholder='Enter Here' />
        </div>
        <div className="input">
        <label htmlFor="Phone" >Phone</label>
        <input type="text" placeholder='Enter Here' />
        </div>
        <div className="input">
        <label htmlFor="Website" >Website</label>
        <input type="text" placeholder='Enter Here' />
        </div>
        <div className="input">
        <label htmlFor="website" >Website</label>
        <input type="text" placeholder='Enter Here' />
        </div>
        <div className="input">
        <label htmlFor="groups" >Groups</label>
        <input type="text" placeholder='Select or Enter' />
        </div>
        <div className="input">
        <label htmlFor="country" >Country</label>
        <input type="text" placeholder='Enter Here' />
        </div>
        <div className="input">
        <label htmlFor="currency" >Currency</label>
        <input type="text" placeholder='Enter Here' />
        </div>
        <div className="input">
        <label htmlFor="zipCode" >Zip Code</label>
        <input type="text" placeholder='Enter Here' />
        </div>
        <div className="input">
        <label htmlFor="state" >State</label>
        <input type="text" placeholder='Enter Here' />
        </div>
        <div className="input">
        <label htmlFor="city" >City</label>
        <input type="text" placeholder='Enter Here' />
        </div>
        <div className="input">
        <label htmlFor="address" >Address</label>
        <input type="text" placeholder='Enter Here' />
        </div>
        
        <div className='btn'>
        <button className='btns'>Save</button>
        <button className='btns'>Save & Next</button>
        </div>
      </div>
    </div>
  )
}

export default AddCustomer
