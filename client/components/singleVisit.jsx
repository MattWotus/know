import React from 'react';
import Navbar from './navbar';
import SingleVisitList from './singleVisitList';

function SingleVisit() {
  return (
    <div className="container-fluid">
      <div className='row'>
        <div className='col-12 d-flex justify-content-between align-items-center mt-4'>
          <div className="blueColor">&lt; Back</div>
          <div><i className="fas fa-ellipsis-h fa-3x"></i></div>
        </div>
      </div>
      <div className='row d-flex justify-content-center'>
        <div className='col-11'>
          <SingleVisitList />
        </div>
      </div>
      <div className='row'>
        <div className='col-12'>
          <Navbar />
        </div>
      </div>
    </div>
  );
}

export default SingleVisit;
