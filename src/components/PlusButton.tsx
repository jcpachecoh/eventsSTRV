import { Glyphicon } from 'react-bootstrap';
import * as React from 'react';
import { connect } from 'react-redux';
import { EventsActions, redirectToAddEvent } from '../actions/eventsActions';
import { Dispatch } from 'redux';

interface IPlusButtonProps {
    redirectToAddEvent: Function;
}
class PlusButton extends React.Component<IPlusButtonProps, {}> {
    public render () {
        const {redirectToAddEvent} = this.props;
        return (
            <div className="plus-button">
                <button onClick={() => redirectToAddEvent()}>
                <Glyphicon glyph="plus" />
                </button>
            </div>
        );
    }
}

type ConnectedDispatchProps = Pick<IPlusButtonProps, 'redirectToAddEvent'>;

export function mapDispatchToProps(dispatch: Dispatch<EventsActions>): ConnectedDispatchProps {
  return {
    redirectToAddEvent: () => dispatch(redirectToAddEvent())
  };
}

export default connect(
  null,
  mapDispatchToProps
)(PlusButton);
