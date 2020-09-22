import React from 'react';
import HomeLogo from './homeLogo';

function Welcome() {
  return (
    <div className="container-fluid d-flex flex-column align-items-center">
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <HomeLogo />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h1 className="mb-0">Welcome to Know</h1>
        </div>
      </div>
      <div id="accountButtons" className="row d-flex justify-content-center mb-4">
        <div className="col-11 mb-2">
          <button type="button" id="getStarted" className="btn"><h5 className="mb-0">Get Started</h5></button>
        </div>
        <div className="col-11">
          <button type="button" id="haveAccount" className="btn"><h5 className="mb-0">I Have An Account</h5></button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
