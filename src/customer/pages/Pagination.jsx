import React  from "react";

import "./pagination.css";

const Pagination = () => {
  
  return (
    <>
         <div className="main-content">

  <div className="pagination">
        <span>Page <input type="number" value="1"/> of 10</span>
        <div className="page-controls">
          <a href="#"><i className="fas fa-angle-left"></i></a>
          <a href="#"><i className="fas fa-angle-right"></i></a>
        </div>
      </div>
          </div>
        </>
  );
};

export default Pagination;

