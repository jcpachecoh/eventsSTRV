import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';
import { EventsActions, getEvents } from '../../actions/eventsActions';
import EventBox from './EventBox';
import { Event } from '../../models/event';
import UserData from '../user/UserData';
import EventsHeader from './EventsHeader';
import { Logo } from '../logo';
import PlusButton from '../PlusButton';
import ModalError from '../user/ModalError';

interface IEventListProps {
  events: Event[];
  getEvents: Function;
  loading: boolean;
}
class EventList extends React.Component<IEventListProps, any> {
  constructor(props: IEventListProps) {
    super(props);
  }

  componentDidMount() {
    this.props.getEvents();
  }
  public render() {
    const { loading } = this.props;
    return (
      <div>
        <Logo />
        <UserData />

        <div className="event-list">
          <EventsHeader />
          {loading && (
            <div className="loading-container">
              <img src="https://vignette.wikia.nocookie.net/lego/images/b/b4/Loading_Animation.gif/revision/latest/scale-to-width-down/480?cb=20120528032206" />
            </div>
          )}
          <div className="event-list-grid">
            {!loading &&
              this.props.events &&
              this.props.events.map((item: Event, index) => {
                return <EventBox event={item} key={index} />;
              })}
          </div>
        </div>
        <PlusButton />
        <ModalError />
      </div>
    );
  }
}

type ConnectedStateProps = Pick<IEventListProps, 'events' | 'loading'>;
export function mapStateToProps({ eventsReducer: { events, loading } }: any): ConnectedStateProps {
  return {
    events,
    loading
  };
}

type ConnectedDispatchProps = Pick<IEventListProps, 'getEvents'>;

export function mapDispatchToProps(dispatch: Dispatch<EventsActions>): ConnectedDispatchProps {
  return {
    getEvents: () => dispatch(getEvents())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventList);
