import React from 'react';

function DeleteModal(props) {
  return (
    <div className="modalOverlay">
      <div className="modalContent">
        <p>Do you want to delete this visit?</p>
        <div className="buttons d-flex justify-content-around">
          <button onClick={props.deleteVisit} id="deleteYes">
            Yes
          </button>
          <button onClick={props.deleteModalToggle} id="deleteNo">
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
