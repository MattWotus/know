import React from 'react';
// import Welcome from './welcome';
// import Visits from './visits';
import VisitForm from './visitForm';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visits: []
    };
    this.addVisit = this.addVisit.bind(this);
  }

  componentDidMount() {
  }

  addVisit(newVisit) {
    const newArray = this.state.visits.slice(0, this.state.visits.length);
    newArray.push(newVisit);
    this.setState({ visits: newArray });
  }

  render() {
    return (
      <VisitForm onSubmit={this.addVisit} />
    );
  }
}
