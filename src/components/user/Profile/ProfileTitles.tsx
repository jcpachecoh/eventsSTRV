import { titles } from '../../../constants';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { EventsActions, changeTemplate } from '../../../actions/eventsActions';
import { Glyphicon } from 'react-bootstrap';

interface IEventsHeaderProps {
  changeTemplate: Function;
}

class ProfileTitles extends React.Component<IEventsHeaderProps, {}> {
  public render() {
    const { changeTemplate } = this.props;
    return (
      <div>
        <div className="profile-header-titles">
            <span>{titles.profileHeader.myEvents}</span>
        </div>
        <ul className="profile-header-buttons">
          <li>
            <a onClick={() => changeTemplate('list')}>
              <Glyphicon glyph="th-list" />
            </a>
          </li>
          <li>
            <a onClick={() => changeTemplate('blocks')}>
              <Glyphicon glyph="th-large" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

type ConnectedDispatchProps = Pick<IEventsHeaderProps, 'changeTemplate' >;

export function mapDispatchToProps(dispatch: Dispatch<EventsActions>): ConnectedDispatchProps {
  return {
    changeTemplate: (value: string) => dispatch(changeTemplate(value))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(ProfileTitles);
