import React from 'react';
import SinglePartnerListItem from './singlePartnerListItem';

function SinglePartnerList(props) {
  if (props.partners === undefined) return null;
  return (
    props.partnersP.map(pers => {
      const propName = Object.keys(pers).map(prop => [prop]);
      return (
        <SinglePartnerListItem
          key={propName}
          id={pers.partnerId}
          test={propName}
          result={pers[propName]} />
      );
    })
  );
}

export default SinglePartnerList;
