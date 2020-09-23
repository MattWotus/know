import React from 'react';
import Welcome from './welcome';
import Login from './login';
import Visits from './visits';
// import VisitForm from './visitForm';
import SingleVisit from './singleVisit';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.setView = this.setView.bind(this);
    this.addVisit = this.addVisit.bind(this);
    this.selectVisit = this.selectVisit.bind(this);
    this.state = {
      view: 'welcome',
      visitId: null
    };
  }

  setView(name) {
    this.setState({ view: name });
  }

  selectVisit(visitId) {
    this.setState({ visitId: visitId });
    this.setState({ view: 'singleVisit' });
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

    if (this.state.view === 'welcome') {
      return (
        <Welcome setView={this.setView} />
      );
    } else if (this.state.view === 'login') {
      return (
        <Login setView={this.setView} />
      );
    } else if (this.state.view === 'visits') {
      return (
        <Visits selectVisit={this.selectVisit} setView={this.setView} />
      );
    } else if (this.state.view === 'singleVisit') {
      return (
        <SingleVisit visitId={this.state.visitId} />
      );
    }
  }
}
