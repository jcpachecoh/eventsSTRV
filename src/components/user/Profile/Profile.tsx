import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';
import { EventsActions, getEventsProfile } from '../../../actions/eventsActions';
import { Logo } from '../../logo';
import ProfileTitles from './ProfileTitles';
import { ProfileHeader } from './ProfileHeader';
import EventBox from '../../events/EventBox';
import { Event } from '../../../models/event';
import { parseJwt } from '../../../scripts/index';
import UserData from '../../user/UserData';
import ModalError from '../ModalError';
import { mockUser } from '../../../constants/index';

interface IEventListProps {
  events: Event[];
  getEventsProfile: Function;
  loading: boolean;
}

interface IEventListState {
  userLoggedData: any;
}
class EventList extends React.Component<IEventListProps, IEventListState> {
  constructor(props: IEventListProps) {
    super(props);

    this.state = {
      userLoggedData: localStorage.getItem('token') ? parseJwt(localStorage.getItem('token')) : mockUser,
    };
  }

  componentDidMount() {
    this.props.getEventsProfile();
  }
  public render() {
    const { loading } = this.props;
    return (
      <div>
        <div className="event-list">
          <Logo />
          <UserData />
          <ProfileHeader userLoggedData={this.state.userLoggedData.user} />
          <ProfileTitles />
          {loading && (
            <div className="loading-container">
              <img src="https://vignette.wikia.nocookie.net/lego/images/b/b4/Loading_Animation.gif/revision/latest/scale-to-width-down/480?cb=20120528032206" />
            </div>
          )}
          {!loading &&
            this.props.events &&
            this.props.events.map((item: Event, index) => {
              return (
                <div key={index}>
                  <EventBox event={item} />
                </div>
              );
            })
          }
        </div>
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

type ConnectedDispatchProps = Pick<IEventListProps, 'getEventsProfile'>;

export function mapDispatchToProps(dispatch: Dispatch<EventsActions>): ConnectedDispatchProps {
  return {
    getEventsProfile: () => dispatch(getEventsProfile())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventList);
