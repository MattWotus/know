import React from 'react';
import VisitListItem from './visitListItem';

class VisitList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visits: [] };
    this.getVisits = this.getVisits.bind(this);
  }

  componentDidMount() {
    this.getVisits();
  }

  getVisits() {
    fetch('/api/visits')
      .then(response => response.json())
      .then(data => this.setState({ visits: data }));
  }

  render() {
    if (this.state.visits.length === 0) {
      return <h3>No visits recorded</h3>;
    } else {
      return (
        this.state.visits.map(visit => {
          return (
            <VisitListItem
              key={visit.visitId}
              id={visit.visitId}
              date={visit.date} />
          );
        })
      );
    }
  }
}

export default VisitList;
