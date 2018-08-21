import { Glyphicon } from 'react-bootstrap';
import * as React from 'react';
import { connect } from 'react-redux';
import { EventsActions, redirectToEventList } from '../actions/eventsActions';
import { Dispatch } from 'redux';

interface ICloseButtonProps {
  redirectToEventList: Function;
}
class CloseButton extends React.Component<ICloseButtonProps, {}> {
  public render() {
    const { redirectToEventList } = this.props;
    return (
      <div className="close-button">
        <a onClick={() => redirectToEventList()}>
          <Glyphicon glyph="remove" /> Close
        </a>
      </div>
    );
  }
}

type ConnectedDispatchProps = Pick<ICloseButtonProps, 'redirectToEventList'>;

export function mapDispatchToProps(dispatch: Dispatch<EventsActions>): ConnectedDispatchProps {
  return {
    redirectToEventList: () => dispatch(redirectToEventList())
  };
}

export default connect(
  null,
  mapDispatchToProps
)(CloseButton);
