import React from 'react';

var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function SingleDateLocation(props) {
  if (props.data === undefined || Object.keys(props.data).length === 0) return 'Loading...';
  const date = props.data.date;
  const newDate = new Date(date);
  const year = newDate.getUTCFullYear();
  const day = newDate.getUTCDate();
  const month = monthNames[newDate.getUTCMonth()];
  const formattedDate = month + ' ' + day + ',' + ' ' + year;
  const city = props.data.city;
  const state = props.data.state;
  const location = city + ',' + ' ' + state;

  return (
    <div className='row d-flex justify-content-center'>
      <div className='col-6 d-flex flex-column align-items-center dateLocation'>
        <div>
          {formattedDate}
        </div>
        <div>
          {location}
        </div>
      </div>
    </div>
  );
}

export default SingleDateLocation;
