import React from 'react';

var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function PartnerListItem(props) {
  const date = props.date;
  const newDate = new Date(date);
  const year = newDate.getUTCFullYear();
  const day = newDate.getUTCDate();
  const month = monthNames[newDate.getUTCMonth()];
  const formattedDate = month + ' ' + day + ',' + ' ' + year;
  return (
    <div onClick={() => props.selectPartner(props.id)} className='partner d-flex justify-content-between align-items-center mt-4 mb-4'>
      <div>
        {props.name}
      </div>
      <div className="d-inline-flex">
        <div>
          {formattedDate}
        </div>
        <div>
          <div className="blueColor ml-2">&gt;</div>
        </div>
      </div>
    </div>
  );
}

export default PartnerListItem;
