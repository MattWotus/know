import React from 'react';

function VisitListItem(props) {
  const date = props.date;
  return (
    <div className='visit d-flex justify-content-between align-items-center'>
      <div>
        {date}
      </div>
      <div>
        <div className="blueColor">&gt;</div>
      </div>
    </div>
  );
}

export default VisitListItem;
