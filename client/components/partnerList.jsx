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
      return <h3>No partners recorded</h3>;
    } else {
      return (
        this.state.partners.map(partner => {
          return (
            <PartnerListItem
              selectPartner={this.props.selectPartner}
              key={partner.partnerId}
              id={partner.partnerId}
              date={partner.date} />
          );
        })
      );
    }
  }
}

export default PartnerList;
