import React from 'react';
import InnerLogo from './innerLogo';
import Navbar from './navbar';
import PartnerList from './partnerList';

function Partners(props) {
  return (
    <div className="container-fluid">
      <div className='row'>
        <div className='col-12 d-flex justify-content-center mt-4'>
          <InnerLogo />
        </div>
      </div>
      <div className='row d-flex justify-content-center'>
        <div className='col-11'>
          <PartnerList />
        </div>
      </div>
      <div className='row'>
        <div className='col-12'>
          <Navbar setView={props.setView} />
        </div>
      </div>
    </div>
  );
}

export default Partners;
