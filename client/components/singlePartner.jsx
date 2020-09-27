import React from 'react';
import SingleDateLocation from './singleDateLocation'; // redundant use
import SinglePartnerList from './singlePartnerList';
import Navbar from './navbar';
import AddModal from './addModal';

class SinglePartner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      partner: {}
    };
  }

  componentDidMount() {
    fetch(`/api/partners/${this.props.partnerId}`)
      .then(response => response.json())
      .then(data => this.setState({ partner: data }));
  }

  render() {
    let addModal = null;
    if (this.props.addModal) {
      addModal = <AddModal addModalToggle={this.props.addModalToggle} setView={this.props.setView} />;
    }
    if (!this.state.partner) return null;
    return (
      <div className="container mb-5 active2">
        <div className='row'>
          <div className='col-12 d-flex justify-content-between align-items-center mt-4'>
            <div onClick={() => this.props.setView('partners')} className="blueColor backFontSize backButton">&lt; Back</div>
            <SingleDateLocation data={this.state.partner} />
            <div className="mx-4"></div>
          </div>
        </div>
        <div className='row d-flex justify-content-center'>
          <div className='col-11'>
            <SinglePartnerList partner={this.state.partner} />
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <Navbar addModalToggle={this.props.addModalToggle} setView={this.props.setView} />
          </div>
        </div>
        {addModal}
      </div>
    );
  }
}

export default SinglePartner;
