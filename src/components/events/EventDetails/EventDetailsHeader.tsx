import { titles } from '../../../constants';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Glyphicon } from 'react-bootstrap';
import { EventsActions, showConfirm } from '../../../actions/eventsActions';
import ConfirmModal from './ConfirmModal';

interface IEventsDetailsHeaderProps {
  showConfirm: Function;
  eventId: string;
  showDeleteButton: boolean;
}

class EventsDetailsHeader extends React.Component<IEventsDetailsHeaderProps, {}> {
  public render() {
    const { eventId, showConfirm, showDeleteButton } = this.props;
    return (
      <div className="events-detail-header">
        <div className="events-details-header-title">
          <span>
            {titles.eventsHeader.detail} # {eventId}
          </span>
        </div>
        {showDeleteButton && (
          <div className="events-details-header-button">
            <button onClick={() => showConfirm(true)}>
              <Glyphicon glyph="trash" /> DELETE EVENT
            </button>
          </div>
        )}
        <ConfirmModal eventId={eventId} />
      </div>
    );
  }
}

type ConnectedDispatchProps = Pick<IEventsDetailsHeaderProps, 'showConfirm'>;

export function mapDispatchToProps(dispatch: Dispatch<EventsActions>): ConnectedDispatchProps {
  return {
    showConfirm: (value: boolean) => dispatch(showConfirm(value))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(EventsDetailsHeader);
