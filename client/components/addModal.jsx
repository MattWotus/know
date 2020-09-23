import React from 'react';

function AddModal(props) {
  return (
    <div className="addModalOverlay">
      <div className="addModalContent">
        <div className="buttons d-flex flex-column justify-content-around align-items-center">
          <button onClick={props.deleteVisit} id="newTest">
            New Test
          </button>
          <button onClick={props.deleteModalToggle} id="newPartner">
            New Partner
          </button>
          <i className="fas fa-minus-circle fa-3x"></i>
        </div>
      </div>
    </div>
  );
}

export default AddModal;
