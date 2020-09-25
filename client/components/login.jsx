import React from 'react';
import InnerLogo from './innerLogo';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
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
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    fetch('/api/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    this.handleReset();
    this.props.setView('visits');
  }

  handleReset() {
    this.setState({
      email: '',
      password: ''
    });
    document.getElementById('signinForm').reset();
  }

  render() {
    return (
      <div className="container whiteBackground pt-5">
        <div className="row mt-5 mb-5">
          <div className="col-12 d-flex justify-content-center">
            <InnerLogo />
          </div>
        </div>
        <div className="row d-flex justify-content-center text-center">
          <div className="col-10">
            <form id="signinForm" onSubmit={this.handleSubmit} onReset={this.handleReset}>
              <div className="form-group">
                <input type="email" className="form-control" id="email" placeholder="Email" />
              </div>
              <div className="form-group">
                <input type="password" className="form-control" id="password" placeholder="Password" />
              </div>
              <button onClick={() => this.props.setView('visits')} type="submit" id="login" className="btn mt-3"><h5 className="mb-0">Login</h5></button>
              <small onClick={() => this.props.setView('signup')} id="createAccount" className="cursor-pointer form-text text-muted mt-4"><p>Create Account</p></small>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
