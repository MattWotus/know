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
      return (
        <div className="row d-flex justify-content-center">
          <div className="col-11 text-center">
            <h3 className="mt-3">No Visits Recorded</h3>
          </div>
        </div>
      );
    } else {
      return (
        this.state.visits.map(visit => {
          return (
            <VisitListItem
              selectVisit={this.props.selectVisit}
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
