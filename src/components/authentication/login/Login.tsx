import * as React from 'react';
import { appLabels } from '../../../constants';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { handleEmail, UsersActions, handlePassword, validateAuthorization } from '../../../actions/usersActions';

export interface ILoginProps {
  handleEmail: Function;
  email: string;
  password: string;
  handlePassword: Function;
  validateAuthorization: Function;
  showError: boolean;
}
class Login extends React.Component<ILoginProps, {}> {
  public render() {
    const { email, handleEmail, password, handlePassword, showError, validateAuthorization } = this.props;
    return (
      <div className="login-box">
        <div className="login-header">
          <h2>Sign in to event.io</h2>
          {showError && <div className="error-span"> {showError} </div>}
          {!showError && <span>Enter your details below</span>}
        </div>
        <div className="input-box">
          <label>{appLabels.emailLabel}</label>
          <input type="email" value={email} onChange={(e: any) => handleEmail(e.target.value)} required={true} />
        </div>
        <div className="input-box">
          <label>{appLabels.passwordLabel}</label>
          <input
            type="password"
            value={password}
            onChange={(e: any) => handlePassword(e.target.value)}
            required={true}
          />
        </div>
        <button onClick={() => validateAuthorization()}>SIGN IN</button>
      </div>
    );
  }
}

type ConnectedStateProps = Pick<ILoginProps, 'email' | 'password' | 'showError'>;
export function mapStateToProps({ userReducer: { email, password, showError } }: any): ConnectedStateProps {
  return {
    email,
    password,
    showError
  };
}

type ConnectedDispatchProps = Pick<ILoginProps, 'handleEmail' | 'handlePassword' | 'validateAuthorization'>;

export function mapDispatchToProps(dispatch: Dispatch<UsersActions>): ConnectedDispatchProps {
  return {
    handleEmail: (email: string) => dispatch(handleEmail(email)),
    handlePassword: (password: string) => dispatch(handlePassword(password)),
    validateAuthorization: () => dispatch(validateAuthorization())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
