import React from 'react';

function Navbar(props) {
  return (
    <div id="navbar" className="d-flex justify-content-around fixed-bottom border-top">
      <div onClick={() => props.setView('visits')} className="d-flex flex-column align-items-center justify-content-center results-nav">
        <i className="fas fa-notes-medical fa-3x"></i>
        <p>Results</p>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center partners-nav">
        <i className="fas fa-user-friends fa-3x"></i>
        <p>Partners</p>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center add-nav">
        <i className="fas fa-plus-circle fa-3x"></i>
        <p>Add</p>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center get-tested-nav">
        <i className="fas fa-map-marked-alt fa-3x"></i>
        <p>Get Tested</p>
      </div>
      <div onClick={() => props.setView('settings')} className="d-flex flex-column align-items-center justify-content-center settings-nav">
        <i className="fas fa-cog fa-3x"></i>
        <p>Settings</p>
      </div>
    </div>
  );
}

export default Navbar;
