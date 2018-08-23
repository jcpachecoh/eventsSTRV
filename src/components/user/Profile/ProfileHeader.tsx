import * as React from 'react';

interface IProfileHeaderProps {
  userLoggedData: any;
}

export class ProfileHeader extends React.Component<IProfileHeaderProps, {}> {
  public render() {
    const { userLoggedData } = this.props;
    return (
      <div className="profile-header">
        <div className="profile-icon">{userLoggedData && userLoggedData.firstName.substring(0, 2).toUpperCase()}</div>
        <div className="profile-data">
          <div className="name">
            {userLoggedData && userLoggedData.firstName} {userLoggedData.lastName}
          </div>
          <div className="email">{userLoggedData && userLoggedData.email}</div>
        </div>
      </div>
    );
  }
}
