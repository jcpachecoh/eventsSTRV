import * as React from 'react';
import {  Dispatch } from 'redux';
import {  connect } from 'react-redux';
import { UsersActions, redirectToSignUp } from '../../../actions/usersActions';

export interface ISignupProps {
  redirectToSignUp: Function;
}
class SignupText extends React.Component<ISignupProps, {}> {
  public render() {
    const { redirectToSignUp } = this.props;
    return (
      <div className="sign-up">
      <span>Don't have account</span>
        <a href="" onClick={() => redirectToSignUp()}>
          SIGN UP
        </a>
      </div>
    );
  }
}
type ConnectedDispatchProps = Pick<ISignupProps, 'redirectToSignUp'>;
export function mapDispatchToProps(dispatch: Dispatch<UsersActions> ): ConnectedDispatchProps {
  return {
    redirectToSignUp: () => dispatch(redirectToSignUp())
  };
}

export default connect(
  null,
  mapDispatchToProps
)(SignupText);
