import React from 'react';
import SingleVisitDateLocation from './singleVisitDateLocation'; // redundant use
import SinglePartnerList from './singlePartnerList';
import Navbar from './navbar';
import DeleteModal from './deleteModal';
import AddModal from './addModal';

class SinglePartner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      partner: {},
      deleteModal: false
    };
    this.deleteModalToggle = this.deleteModalToggle.bind(this);
    this.deletePartner = this.deletePartner.bind(this);
  }

  componentDidMount() {
    fetch(`/api/partners/${this.props.partnerId}`)
      .then(response => response.json())
      .then(data => this.setState({ partner: data }));
  }

  deleteModalToggle() {
    this.setState({ deleteModal: !this.state.deleteModal });
  }

  deletePartner() {
    this.deleteModalToggle();
    fetch(`/api/partners/${this.props.partnerId}`, {
      method: 'DELETE'
    });
    this.setState({ partner: {} });
    this.props.setView('partners');
  }

  render() {
    let deleteModal = null;
    if (this.state.deleteModal) {
      deleteModal = <DeleteModal deletePartner={this.deletePartner} deleteModalToggle={this.deleteModalToggle} />;
    }
    let addModal = null;
    if (this.props.addModal) {
      addModal = <AddModal addModalToggle={this.props.addModalToggle} setView={this.props.setView} />;
    }
    return (
      <div className="container mb-5 active2">
        <div className='row'>
          <div className='col-12 d-flex justify-content-between align-items-center mt-4'>
            <div onClick={() => this.props.setView('partners')} className="blueColor backFontSize backButton">&lt; Back</div>
            {/* <div><i onClick={this.deleteModalToggle} className="fas fa-ellipsis-h fa-3x visit-ellipsis"></i></div> */}
          </div>
        </div>
        <SingleVisitDateLocation data={this.state.partner} />
        <div className='row d-flex justify-content-center'>
          <div className='col-11'>
            <SinglePartnerList partners={this.state.partners} />
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <Navbar addModalToggle={this.props.addModalToggle} setView={this.props.setView} />
          </div>
        </div>
        {deleteModal}
        {addModal}
      </div>
    );
  }
}

export default SinglePartner;
