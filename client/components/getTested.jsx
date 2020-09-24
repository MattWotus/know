import React from 'react';
import Navbar from './navbar';
import AddModal from './addModal';

const scriptOne = document.createElement('script');
const scriptTwo = document.createElement('script');

class GetTested extends React.Component {

  componentDidMount() {
    scriptOne.type = 'module';
    scriptOne.src = 'https://locator.hiv.gov/build/locator-widget.esm.js';
    scriptTwo.type = 'text/javascript';
    scriptTwo.src = 'https://locator.hiv.gov/build/locator-widget.js';
    document.head.appendChild(scriptOne);
    document.head.appendChild(scriptTwo);
  }

  componentWillUnmount() {
  }

  render() {
    let addModal = null;
    if (this.props.addModal) {
      addModal = <AddModal addModalToggle={this.props.addModalToggle} setView={this.props.setView} />;
    }
    return (
      <div className="container active4">
        <div className='row d-flex justify-content-center pt-3'>
          <div className='col-11 d-flex justify-content-center'>
            <locator-widget></locator-widget>
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
export default GetTested;
