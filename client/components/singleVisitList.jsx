import React from 'react';
import SingleVisitListItem from './singleVisitListItem';

class SingleVisitList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tests: [] };
    this.getSingleVisit = this.getSingleVisit.bind(this);
  }

  componentDidMount() {
    this.getSingleVisit();
  }

  getSingleVisit() {
    const fakeTestData = {
      city: 'Chicago',
      date: '2020-09-21T04:00:00.000Z',
      diseases: [
        {
          chlamydia: 'Negative'
        },
        {
          gonorrhea: 'Negative'
        },
        {
          hepatitis: 'Negative'
        },
        {
          herpes: 'Negative'
        },
        {
          hiv: 'Negative'
        },
        {
          syphilis: 'Negative'
        }
      ],
      state: 'IL',
      visitId: 1
    };
    this.setState({ tests: fakeTestData.diseases });
  }

  render() {
    return (
      this.state.tests.map(test => {
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
}

export default SingleVisitList;
