import React from 'react';
import InnerLogo from './innerLogo';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    };
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password
    };
    fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    });
    this.handleReset();
    this.props.setView('visits');
  }

  handleReset() {
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    });
    document.getElementById('signupForm').reset();
  }

  render() {
    return (
      <div className="container pt-4">
        <div className="row mb-4">
          <div className="col-12 d-flex justify-content-center">
            <InnerLogo />
          </div>
        </div>
        <div className="row d-flex justify-content-center text-center">
          <div className="col-10">
            <form id="signupForm" onSubmit={this.handleSubmit} onReset={this.handleReset}>
              <div className="form-group">
                <input type="text" className="form-control" id="firstName" placeholder="First Name" required />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" id="lastName" placeholder="Last Name" required />
              </div>
              <div className="form-group">
                <input type="email" className="form-control" id="email" placeholder="Email" required />
              </div>
              <div className="form-group">
                <input type="password" className="form-control" id="password" placeholder="Password" required />
              </div>
              <div className="form-group">
                <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password" required />
              </div>
              <button type="submit" id="login" className="btn mt-3"><h5 className="mb-0">Create Account</h5></button>
            </form>
            <small onClick={() => this.props.setView('login')} id="signIn" className="cursor-pointer form-text text-muted mt-4"><p>Sign In</p></small>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
