import * as React from 'react';
import SignupText from './login/SignupText';
import Login from './login/Login';
import { LeftBanner } from './LeftBanner';
import { Logo } from '../logo';

export class Authentication extends React.Component<any, any> {
  public render() {
    return (
      <div className="login-container">
        <Logo />
        <LeftBanner />
        <div className="right-banner">
          <Login />
          <SignupText />
        </div>
      </div>
    );
  }
}
