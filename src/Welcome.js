import React from 'react';

const Welcome = ({ history }) => (
      <div className="app">
        <div>
          <h1>BANG!</h1>
          <h2>By App Academy</h2>
          <button className="app-btn" onClick={() => history.push('/login')}>Start</button>
        </div>
      </div>
    );

export default Welcome;