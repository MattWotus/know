import React from 'react';

function Navbar() {
  return (
    <div id="navbar" className="d-flex justify-content-around fixed-bottom">
      <i className="fas fa-notes-medical fa-3x"></i>
      <i className="fas fa-user-friends fa-3x"></i>
      <i className="fas fa-plus-circle fa-3x"></i>
      <i className="fas fa-map-marked-alt fa-3x"></i>
      <i className="fas fa-cog fa-3x"></i>
    </div>
  );
}

export default Navbar;
