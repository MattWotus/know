import React from 'react';
import InnerLogo from './innerLogo';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.validateFields = this.validateFields.bind(this);
    this.validateCredentials = this.validateCredentials.bind(this);
    this.state = {
      email: '',
      password: '',
      errorMessage: ''
    };
  }

  validateFields() {
    let errorMessage = '';
    if (!this.state.email || !this.state.password) {
      errorMessage = 'email and password are required fields';
    } else if (!this.state.email.includes('@')) {
      errorMessage = 'invalid email';
    }
    if (errorMessage) {
      this.setState({ errorMessage });
      return false;
    }
    this.setState({ errorMessage: '' });
    return true;
  }

  validateCredentials() {
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    let result;
    fetch('/api/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(result => {
        if (result.ok === false) {
          this.setState(() => ({ errorMessage: 'username and password do not match' }));
        }
        result = true;
      });
    return result;
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const isValid = this.validateFields();
    if (isValid) {
      const credentials = this.validateCredentials();
      if (credentials) {
        this.props.setView('visits');
        this.handleReset();
      }
    }
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
                <input onChange={this.handleChange} name="email" type="email" className="form-control" id="email" placeholder="Email" required />
              </div>
              <div className="form-group">
                <input onChange={this.handleChange} name="password" type="password" className="form-control" id="password" placeholder="Password" required />
                {this.state.errorMessage ? <div className="alert alert-danger mt-2" role="alert">
                  {this.state.errorMessage}
                </div> : null}
              </div>
              <button type="submit" id="login" className="btn mt-2"><h5 className="mb-0">Login</h5></button>
              <small onClick={() => this.props.setView('signup')} id="createAccount" className="cursor-pointer form-text text-muted mt-4"><p>Create Account</p></small>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
