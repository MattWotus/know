import React from 'react';
import Navbar from './navbar';
import PartnerList from './partnerList';
import AddModal from './addModal';

function Partners(props) {
  let addModal = null;
  if (props.addModal) {
    addModal = <AddModal addModalToggle={props.addModalToggle} setView={props.setView} />;
  }
  return (
    <div className="container active2">
      <div className='row d-flex justify-content-center pt-3'>
        <div className='col-11'>
          <PartnerList />
        </div>
      </div>
      <div className='row'>
        <div className='col-12'>
          <Navbar addModalToggle={props.addModalToggle} setView={props.setView} />
        </div>
      </div>
      {addModal}
    </div>
  );
}

export default Partners;
