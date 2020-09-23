import React from 'react';
import Navbar from './navbar';
import AddModal from './addModal';

function Settings(props) {
  let addModal = null;
  if (props.addModal) {
    addModal = <AddModal addModalToggle={props.addModalToggle} setView={props.setView} />;
  }
  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-center">
        <div className="col-11 d-flex justify-content-center">
          <h2 className="mt-3 mb-3">Settings</h2>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-11 d-flex justify-content-between align-items-center mt-3 mb-3 settings">
          <div>Email</div>
          <div>
            <div className="blueColor">&gt;</div>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-11 d-flex justify-content-between align-items-center mt-3 mb-3 settings">
          <div>Password</div>
          <div>
            <div className="blueColor">&gt;</div>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-11 d-flex justify-content-between align-items-center mt-3 mb-3 settings">
          <div>Privacy Policy</div>
          <div>
            <div className="blueColor">&gt;</div>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-11 d-flex justify-content-between align-items-center mt-3 mb-3 settings">
          <div>Help</div>
          <div>
            <div className="blueColor">&gt;</div>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div onClick={() => props.setView('welcome')}className="col-11 d-flex justify-content-between align-items-center mt-3 mb-3 settings">
          <div>Log Out</div>
          <div>
            <div className="blueColor">&gt;</div>
          </div>
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
export default Settings;
