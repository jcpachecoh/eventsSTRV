import { Glyphicon } from 'react-bootstrap';
import * as React from 'react';
import { connect } from 'react-redux';
import { EventsActions, redirectToEventList } from '../actions/eventsActions';
import { Dispatch } from 'redux';

interface ICheckButtonProps {
    redirectToEventList: Function;
}
class CheckButton extends React.Component<ICheckButtonProps, {}> {
    public render() {
        const { redirectToEventList } = this.props;
        return (
            <div className="check-button">
                <button onClick={() => redirectToEventList()}>
                    <Glyphicon glyph="ok" />
                </button>
            </div>
        );
    }
}

type ConnectedDispatchProps = Pick<ICheckButtonProps, 'redirectToEventList'>;

export function mapDispatchToProps(dispatch: Dispatch<EventsActions>): ConnectedDispatchProps {
    return {
        redirectToEventList: () => dispatch(redirectToEventList())
    };
}

export default connect(
    null,
    mapDispatchToProps
)(CheckButton);
