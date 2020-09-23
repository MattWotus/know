import React from 'react';
import HomeLogo from './homeLogo';

function Welcome(props) {
  return (
    <div className="container-fluid d-flex flex-column justify-content-center whiteBackground">
      <div className="row mb-5">
        <div className="col-12 d-flex justify-content-center mb-3">
          <HomeLogo />
        </div>
        <div className="col-12 d-flex justify-content-center mb-5">
          <h2 className="mb-5">Welcome to Know</h2>
        </div>
      </div>
      <div id="accountButtons" className="row d-flex justify-content-center mb-4">
        <div className="col-11 mb-2">
          <button type="button" id="getStarted" className="btn"><h5 className="mb-0">Get Started</h5></button>
        </div>
        <div className="col-11">
          <button onClick={() => props.setView('login')} type="button" id="haveAccount" className="btn"><h5 className="mb-0">I Have An Account</h5></button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
