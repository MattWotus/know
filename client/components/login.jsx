import React from 'react';
import InnerLogo from './innerLogo';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="container pt-5">
        <div className="row mt-5 mb-5">
          <div className="col-12 d-flex justify-content-center">
            <InnerLogo />
          </div>
        </div>
        <div className="row d-flex justify-content-center text-center">
          <div className="col-10">
            <form id="signinForm">
              <div className="form-group">
                <input name="email" type="email" className="form-control" id="email" placeholder="Email" required />
              </div>
              <div className="form-group">
                <input name="password" type="password" className="form-control" id="password" placeholder="Password" required />
              </div>
              <button onClick={() => this.props.setView('visits')} type="submit" id="login" className="btn mt-2"><h5 className="mb-0">Login</h5></button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
