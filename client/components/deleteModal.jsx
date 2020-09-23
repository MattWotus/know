import React from 'react';

function DeleteModal() {
  return (
    <div className="modalOverlay">
      <div className="modalContent">
        <p>Do you want to delete this visit?</p>
        <div className="buttons d-flex justify-content-around">
          <button id="deleteYes">
            Yes
          </button>
          <button id="deleteNo">
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
