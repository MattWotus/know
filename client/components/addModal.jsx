import React from 'react';

function AddModal(props) {
  return (
    <div className="addModalOverlay">
      <div className="addModalContent">
        <div className="addButtons d-flex flex-column justify-content-around align-items-center">
          <button onClick={() => { props.setView('visitForm'); props.addModalToggle(); }} id="newTest">
            New Visit
          </button>
          <button id="newPartner">
            New Partner
          </button>
          <i onClick={props.addModalToggle} className="fas fa-minus-circle fa-3x"></i>
        </div>
      </div>
    </div>
  );
}

export default AddModal;
