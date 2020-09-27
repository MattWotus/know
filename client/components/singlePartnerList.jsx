import React from 'react';

function SinglePartnerList(props) {
  const pers = props.partner.name;

  if (props.partner === undefined || Object.keys(props.partner).length === 0) return 'Loading...';
  return (
    <div className='singlePartner d-flex justify-content-between align-items-center mt-4 mb-4'>
      <div>
        Partner Name
      </div>
      <div>
        <div>
          {pers}
        </div>
      </div>
    </div>
  );
}

export default SinglePartnerList;
