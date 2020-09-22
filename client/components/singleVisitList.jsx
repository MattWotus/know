import React from 'react';
import SingleVisitListItem from './singleVisitListItem';

class SingleVisitList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { test: [] };
    this.getSingleVisit = this.getSingleVisit.bind(this);
  }

  componentDidMount() {
    this.getSingleVisit();
  }

  getSingleVisit() {
    const fakeTestData = [

      {
        test: 'test',
        result: 'result'
      },
      {
        test: 'test',
        result: 'result'
      },
      {
        test: 'test',
        result: 'result'
      },
      {
        test: 'test',
        result: 'result'
      },
      {
        test: 'test',
        result: 'result'
      },
      {
        test: 'test',
        result: 'result'
      }
    ];
    this.setState({ tests: fakeTestData });
  }

  render() {
    if (this.state.test.length === 0) {
      return <h3>No tests recorded</h3>;
    } else {
      return (
        this.state.test.map(test => {
          return (
            <SingleVisitListItem
              key={test.visitId}
              id={test.visitId}
              date={test.date} />
          );
        })
      );
    }
  }
}

export default SingleVisitList;
