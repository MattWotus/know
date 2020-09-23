import React from 'react';

function SingleVisitListItem(props) {
  const test = props.test;
  const testName = test[0];
  let testNameUpper = '';
  if (testName[0].length <= 3) {
    testNameUpper = testName[0].toUpperCase();
  } else {
    const first = testName[0].charAt(0);
    const upper = first.toUpperCase();
    testNameUpper = upper + testName[0].slice(1);
  }

  const result = props.result;
  return (
    <div className='testResult d-flex justify-content-between align-items-center mt-4 mb-4'>
      <div>
        {testNameUpper}
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
