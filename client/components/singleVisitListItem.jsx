import React from 'react';

function SingleVisitListItem(props) {
  const test = props.test;
  const result = props.result;
  return (
    <div className='visit d-flex justify-content-between align-items-center mt-4 mb-4'>
      <div>
        {test}
      </div>
      <div>
        <div>
          {result}
        </div>
      </div>
    </div>
  );
}

export default SingleVisitListItem;
