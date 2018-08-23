import { Event } from '../../models/event';
import * as React from 'react';
import { formatDate, parseJwt } from '../../scripts/index';
import { EventsActions, redirectToEventDetail, attentEvent, leaveEvent, editEvent } from '../../actions/eventsActions';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { mockUser } from '../../constants/index';

interface IEventState {
  userLogged: any;
  isAttended: boolean;
}
interface IEventProps {
  event: Event;
  redirectToEventDetail: Function;
  attentEvent: Function;
  leaveEvent: Function;
  editEvent: Function;
}
export class EventBox extends React.Component<IEventProps, IEventState> {
  constructor(props: IEventProps) {
    super(props);
    this.state = {
      userLogged: localStorage.getItem('token') ? parseJwt(localStorage.getItem('token')) : mockUser,
      isAttended: false
    };
  }
  componentDidMount() {
    this.validIsAttended();
  }
  validIsAttended() {
    let isValid = this.props.event.attendees.find((item) => {
      return item._id === this.state.userLogged.user._id;
    });
    if (isValid) {
      this.setState({
        isAttended: true
      });
    } else {
      this.setState({
        isAttended: false
      });
    }
  }
  public render() {
    const { event, redirectToEventDetail, attentEvent, leaveEvent, editEvent } = this.props,
      { userLogged, isAttended } = this.state;
    return (
      <div className="event-box">
        <a className="event-title" onClick={() => redirectToEventDetail(event._id)}>
          {event.title}
        </a>
        <span className="event-description">{event.description}</span>
        <span className="event-author">
          {event.owner.firstName} {event.owner.lastName}
        </span>
        <span className="event-date">{formatDate(event.startsAt)}</span>
        <span className="event-capacity">
          {event.attendees.length} of {event.capacity}
        </span>
        {userLogged && userLogged.user._id === event.owner._id && (
          <button className="edit-button" onClick={() => editEvent(event)}>
            EDIT
          </button>
        )}
        {userLogged && userLogged.user._id !== event.owner._id && !isAttended && new Date(event.startsAt) > new Date()  && <button onClick={() => attentEvent(event._id)}>JOIN</button>}
        {isAttended && new Date(event.startsAt) > new Date() && <button className="leave-button" onClick={() => leaveEvent(event._id)}>LEAVE</button>}
      </div>
    );
  }
}

type ConnectedDispatchProps = Pick<IEventProps, 'redirectToEventDetail' | 'attentEvent' | 'leaveEvent' | 'editEvent'>;

export function mapDispatchToProps(dispatch: Dispatch<EventsActions>): ConnectedDispatchProps {
  return {
    redirectToEventDetail: (id: string) => dispatch(redirectToEventDetail(id)),
    attentEvent: (id: string) => dispatch(attentEvent(id)),
    leaveEvent: (id: string) => dispatch(leaveEvent(id)),
    editEvent: (event: Event) => dispatch(editEvent(event)),
  };
}

export default connect(
  null,
  mapDispatchToProps
)(EventBox);
