import React from 'react';
import SingleVisitListItem from './singleVisitListItem';

function SingleVisitList(props) {
  if (props.diseases === undefined) return null;
  return (
    props.diseases.map(test => {
      const propName = Object.keys(test).map(prop => [prop]);
      return (
        <SingleVisitListItem
          key={propName}
          id={test.visitId}
          test={propName}
          result={test[propName]} />
      );
    })
  );
}

export default SingleVisitList;
