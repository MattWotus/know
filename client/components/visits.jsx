import React from 'react';
import InnerLogo from './innerLogo';
import Navbar from './navbar';
import VisitList from './visitList';
import AddModal from './addModal';

function Visits(props) {
  return (
    <div className="container">
      <div className='row'>
        <div className='col-12 d-flex justify-content-center mt-4'>
          <InnerLogo />
        </div>
      </div>
      <div className='row d-flex justify-content-center'>
        <div className='col-11'>
          <VisitList selectVisit={props.selectVisit} />
        </div>
      </div>
      <div className='row'>
        <div className='col-12'>
          <Navbar setView={props.setView} />
        </div>
      </div>
      <AddModal />
    </div>
  );
}

export default Visits;
