import React from 'react'
// import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Sidebar from './customer/pages/Sidebar'
import Navbar from './customer/pages/Navbar'
import TableContent from './customer/pages/TableContent'
import Pagination from './customer/pages/Pagination'
import "./App.css";
import AddCustomer from './customer/pages/AddCustomer'
import AddCustomerNavbar from './customer/pages/AddCustomerNavbar'
import BilllingShippingAddress from './customer/pages/BilllingShippingAddress'
import Contact from './customer/pages/Contact'



const App = () => {
  return (
    
    <div className='landing'>
      <Sidebar/>
      <div className='landing2'>
        <div>
        <Navbar/>
        </div>
        
        <div>
          
        {/* <TableContent/>
        <Pagination/> */}
        </div>
        <div>
        <div>
        <AddCustomerNavbar/>
        </div>
        <div>
          {/* <AddCustomer/> */}
        </div>

        {/* <div><BilllingShippingAddress/></div> */}
        <div><Contact/></div>
        </div>
        
        </div>
    </div>
   
  )
}

export default App
