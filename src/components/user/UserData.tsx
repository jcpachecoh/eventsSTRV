import * as React from 'react';
import { User } from '../../models/user';
import { UsersActions, logout, redirectToProfile } from '../../actions/usersActions';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { parseJwt } from '../../scripts/index';
import { mockUser } from '../../constants/index';

interface IUserDataProps {
  userLogged: User;
  logout: Function;
  redirectToProfile: Function;
}

interface IUserDataState {
  showSubMenu: boolean;
  userLoggedData: any;
}

class UserData extends React.Component<IUserDataProps, IUserDataState> {
  constructor(props: IUserDataProps) {
    super(props);
    this.state = {
      showSubMenu: false,
      userLoggedData: localStorage.getItem('token') ? parseJwt(localStorage.getItem('token')) : mockUser
    };
  }
  public render() {
    const { logout, redirectToProfile } = this.props,
      userLoggedData = this.state.userLoggedData;

    return (
      <div className="user-data">
        <button
          onClick={() => {
            this.setState({ showSubMenu: !this.state.showSubMenu });
          }}
        >
          <span>{userLoggedData.user.firstName && userLoggedData.user.firstName.substring(0, 2).toUpperCase()}</span>
          <div>
            {userLoggedData.user.firstName && userLoggedData.user.firstName}{' '}
            {userLoggedData.user.lastName && userLoggedData.user.lastName}
          </div>
        </button>

        {this.state.showSubMenu && (
          <ul className="user-data-submenu">
            <li>
              <a onClick={() => redirectToProfile()}>Profile</a>
            </li>
            <li>
              <a onClick={() => logout()}>Log Out</a>
            </li>
          </ul>
        )}
      </div>
    );
  }
}

type ConnectedStateProps = Pick<IUserDataProps, 'userLogged'>;
export function mapStateToProps({ userReducer: { userLogged } }: any): ConnectedStateProps {
  return {
    userLogged: userLogged
  };
}

type ConnectedDispatchProps = Pick<IUserDataProps, 'logout' | 'redirectToProfile'>;

export function mapDispatchToProps(dispatch: Dispatch<UsersActions>): ConnectedDispatchProps {
  return {
    logout: () => dispatch(logout()),
    redirectToProfile: () => dispatch(redirectToProfile())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserData);
