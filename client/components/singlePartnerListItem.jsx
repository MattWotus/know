import React from 'react';

function SinglePartnerListItem(props) {
  const pers = props.pers;
  const persName = pers[0];
  let persNameUpper = '';
  if (persName[0].length <= 3) {
    persNameUpper = persName[0].toUpperCase();
  } else {
    const first = persName[0].charAt(0);
    const upper = first.toUpperCase();
    persNameUpper = upper + persName[0].slice(1);
  }

  const result = props.result;
  return (
    <div className='testResult d-flex justify-content-between align-items-center mt-4 mb-4'>
      <div>
        {persNameUpper}
      </div>
      <div>
        <div>
          {result}
        </div>
      </div>
    </div>
  );
}

export default SinglePartnerListItem;
