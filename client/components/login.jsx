import React from 'react';
import InnerLogo from './innerLogo';

function Login(props) {
  return (
    <div className="container pt-5">
      <div className="row mt-5 mb-5">
        <div className="col-12 d-flex justify-content-center">
          <InnerLogo />
        </div>
      </div>
      <div className="row d-flex justify-content-center text-center">
        <div className="col-10">
          <form>
            <div className="form-group">
              <input type="email" className="form-control" id="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" id="password" placeholder="Password" />
            </div>
            <button onClick={() => props.setView('visits')} type="submit" id="login" className="btn mt-3"><h5 className="mb-0">Login</h5></button>
            <small id="passwordHelp" className="form-text text-muted mt-4"><p>Forgot Password</p></small>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
