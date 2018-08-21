import * as React from 'react';
import SignupText from './login/SignupText';
import Login from './login/Login';
import { LeftBanner } from './LeftBanner';

export class Authentication extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="login-container">
        <LeftBanner />
        <div className="right-banner">
          <SignupText />
          <Login />
        </div>
      </div>
    );
  }
}
