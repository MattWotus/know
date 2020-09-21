import React from 'react';
import VisitList from './visitList';

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
      <VisitList />
    );
  }
}
