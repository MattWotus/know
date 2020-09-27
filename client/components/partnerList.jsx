import React from 'react';
import PartnerListItem from './partnerListItem';

class PartnerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { partners: [] };
    this.getPartners = this.getPartners.bind(this);
  }

  componentDidMount() {
    this.getPartners();
  }

  getPartners() {
    fetch('/api/partners')
      .then(response => response.json())
      .then(data => this.setState({ partners: data }));
  }

  render() {
    if (this.state.partners.length === 0) {
      return (
        <div className="row d-flex justify-content-center">
          <div className="col-11 text-center">
            <h3>No Partners Recorded</h3>
          </div>
        </div>
      );
    } else {
      return (
        this.state.partners.map(partner => {
          return (
            <PartnerListItem
              selectPartner={this.props.selectPartner}
              key={partner.partnerId}
              id={partner.partnerId}
              date={partner.date}
              name={partner.name} />
          );
        })
      );
    }
  }
}

export default PartnerList;
