import React from 'react';
import SingleVisitDateLocation from './singleVisitDateLocation';
import SingleVisitList from './singleVisitList';
import Navbar from './navbar';
import DeleteModal from './deleteModal';

class SingleVisit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visit: {}
    };
  }

  componentDidMount() {
    fetch(`/api/visits/${this.props.visitId}`)
      .then(response => response.json())
      .then(data => this.setState({ visit: data }));
  }

  render() {
    return (
      <div className="container-fluid mb-5">
        <div className='row'>
          <div className='col-12 d-flex justify-content-between align-items-center mt-4'>
            <div onClick={() => this.props.setView('visits')} className="blueColor backFontSize backButton">&lt; Back</div>
            <div><i className="fas fa-ellipsis-h fa-3x"></i></div>
          </div>
        </div>
        <SingleVisitDateLocation data={this.state.visit} />
        <div className='row d-flex justify-content-center'>
          <div className='col-11'>
            <SingleVisitList diseases={this.state.visit.diseases} />
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <Navbar />
          </div>
        </div>
        <DeleteModal />
      </div>
    );
  }
}

export default SingleVisit;
