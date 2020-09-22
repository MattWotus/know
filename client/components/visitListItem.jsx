import React from 'react';

var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function VisitListItem(props) {
  const date = props.date;
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  const day = newDate.getDate();
  const month = monthNames[newDate.getMonth()];
  const formattedDate = month + ' ' + day + ',' + ' ' + year;
  return (
    <div className='visit d-flex justify-content-between align-items-center mt-4 mb-4'>
      <div>
        {formattedDate}
      </div>
      <div>
        <div className="blueColor">&gt;</div>
      </div>
    </div>
  );
}

export default VisitListItem;
