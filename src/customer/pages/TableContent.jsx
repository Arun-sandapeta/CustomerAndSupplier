import React from 'react'
import "./tablecontent.css";

const TableContent = () => {
  return (
    
      <div className="container">
    <div className="content-header">
      <h2>Customer Summery</h2>
    </div>
    <div className="main-search">
      <div className="search-bar">
        <input type="text" placeholder="Search..."  />

      
        
        </div>
        <div className="search-and-stats">
      <div className="stats">
        <div className="stat">
          <p>Total Customers</p>
          <h3 className="number-color">15</h3>
        </div>
        <div className="stat active">
          <p>Active Customers</p>
          <h3  className="number-color">13</h3>
        </div>
        <div className="stat inactive">
          <p>Inactive Customers</p>
          <h3  className="number-color">02</h3>
        </div>
      </div>
    </div>
    </div>
    <div className="add-button">
    <button className="button" >Add+</button>
    </div>
    <div className="user-table">
      <table>
        <thead>
          <tr >
            <th >Name</th>
            <th>Code</th>
            <th>Location</th>
            <th>Phone #</th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><a href="#">Mohan Krishna</a></td>
            <td>1111</td>
            <td>Hyderabad</td>
            <td>9988855112</td>
            <td>mgamrepudi@neoterictechnologiesinc.com</td>
            <td className="status inactive">Inactive</td>
            <td className="actions">
              <a href="#"><i className="fas fa-pencil-alt"></i></a>
              <a href="#"><i className="fas fa-trash"></i></a>
            </td>
          </tr>
          <tr>
          <td><a href="#">Mohan Krishna</a></td>
            <td>1111</td>
            <td>Hyderabad</td>
            <td>9988855112</td>
            <td>mgamrepudi@neoterictechnologiesinc.com</td>            
            <td className="status active">Active</td>
            <td className="actions">
              <a href="#"><i className="fas fa-pencil-alt"></i></a>
              <a href="#"><i className="fas fa-trash"></i></a>
            </td>
          </tr>
          <tr>
          <td><a href="#">Mohan Krishna</a></td>
            <td>1111</td>
            <td>Hyderabad</td>
            <td>9988855112</td>
            <td>mgamrepudi@neoterictechnologiesinc.com</td>  
            <td className="status active">Active</td>
            <td className="actions">
              <a href="#"><i className="fas fa-pencil-alt"></i></a>
              <a href="#"><i className="fas fa-trash"></i></a>
            </td>
          </tr>
          <tr>
          <td><a href="#">Mohan Krishna</a></td>
            <td>1111</td>
            <td>Hyderabad</td>
            <td>9988855112</td>
            <td>mgamrepudi@neoterictechnologiesinc.com</td>  
            <td className="status inactive">Inactive</td>
            <td className="actions">
              <a href="#"><i className="fas fa-pencil-alt"></i>dfkjfdk </a>
              <a href="#"><i className="fas fa-trash"></i></a>
            </td>
          </tr>
        </tbody>
      </table>
    
    </div>
  </div>
    
  )
}

export default TableContent
