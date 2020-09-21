import React from 'react';
import Navbar from './navbar';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      isLoading: true
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="container-fluid">
        <div className='row'>
          <div className='col-12'>
            <Navbar />
          </div>
        </div>
      </div>
    );
  }
}
