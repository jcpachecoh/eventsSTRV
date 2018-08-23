import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';
import { EventsActions, getEventDetail } from '../../../actions/eventsActions';
import { Event } from '../../../models/event';
import UserData from '../../user/UserData';
import { Logo } from '../../logo';
import CheckButton from '../../CheckButton';
import { appLabels, mockUser } from '../../../constants/index';
import EventDetailsHeader from './EventDetailsHeader';
import { formatDate, parseJwt } from '../../../scripts/index';
import ModalError from '../../user/ModalError';

interface IEventDetailState {
  userLogged: any;
}
interface IEventDetailsProps {
  event: Event;
  getEventDetail: Function;
  loading: boolean;
}
class EventDetails extends React.Component<IEventDetailsProps, IEventDetailState> {
  constructor(props: IEventDetailsProps) {
    super(props);

    this.state = {
      userLogged: localStorage.getItem('token') ? parseJwt(localStorage.getItem('token')) : mockUser
    };
  }

  componentDidMount() {
    const id = window.location.pathname.split('/')[2];
    this.props.getEventDetail(id);
  }
  public render() {
    const { loading, event } = this.props;
    return (
      <div className="event-detail">
        <Logo />
        <UserData />

        {event && <EventDetailsHeader eventId={event._id} showDeleteButton={event.owner._id === this.state.userLogged.user._id} />}
        {loading && (
          <div className="loading-container">
            <img src={'../../../assets/gifs/Loading_Animation.gif'} />
          </div>
        )}
        {!loading &&
          event && (
            <div className="event-detail-box">
              <div className="event-detail-data">
                <div className="detail-box">
                  <label>{appLabels.date}</label>
                  <span>{formatDate(event.startsAt).split(',')[0]}</span>
                </div>
                <div className="detail-box">
                  <label>{appLabels.time}</label>
                  <span>{formatDate(event.startsAt).split(',')[1]}</span>
                </div>
                <div className="detail-box">
                  <label>{appLabels.title}</label>
                  <span>{event.title}</span>
                </div>
                <div className="detail-box">
                  <label>{appLabels.description}</label>
                  <span>{event.description}</span>
                </div>
                <div className="detail-box">
                  <label>{appLabels.capacity}</label>
                  <span>{event.capacity}</span>
                </div>
              </div>
              <div className="event-details-attendes">
                <h2>Attendees</h2>
                {event &&
                  event.attendees.map((item, index) => {
                    return (
                      <div key={index}>
                        <span>
                          {item.firstName} {item.lastName}
                        </span>
                      </div>
                    );
                  })}
              </div>
            </div>
          )}
        <CheckButton />
        <ModalError />
      </div>
    );
  }
}

type ConnectedStateProps = Pick<IEventDetailsProps, 'event' | 'loading'>;
export function mapStateToProps({ eventsReducer: { event, loading } }: any): ConnectedStateProps {
  return {
    event,
    loading
  };
}

type ConnectedDispatchProps = Pick<IEventDetailsProps, 'getEventDetail'>;

export function mapDispatchToProps(dispatch: Dispatch<EventsActions>): ConnectedDispatchProps {
  return {
    getEventDetail: (id: string) => dispatch(getEventDetail(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDetails);
