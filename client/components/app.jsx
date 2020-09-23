import React from 'react';
// import Welcome from './welcome';
import Visits from './visits';
// import VisitForm from './visitForm';
// import SingleVisit from './singleVisit';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.addVisit = this.addVisit.bind(this);
  }

  addVisit(newVisit) {
    fetch('/api/visits', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newVisit)
    });
  }

  render() {
    return (
      // <VisitForm onSubmit={this.addVisit} />
      <Visits />
    );
  }
}
