import * as React from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';
import { Authentication } from './components/authentication/Authentication';
import EventList from './components/events/EventList';
import AddEvent from './components/events/AddEvent';
import Signup from './components/authentication/login/Signup';
import Profile from './components/user/Profile/Profile';
import EventDetail from './components/events/EventDetails/EventDetail';

const NoMatch = () => (
  <div className="container">
    <Jumbotron>
      <h3>
        404 Error No match for location <code>{location.pathname}</code>
      </h3>
      Go To <Link to="/auth">home</Link>
    </Jumbotron>
  </div>
);

export class ConnectedRoot extends React.Component<any, any> {
  componentDidMount() {
    if (window.location.pathname === '' || window.location.pathname === '/') {
      window.location.href = '/auth';
    }
  }
  renderAuthentication = () => {
    if (!localStorage.getItem('token')) {
      return <Authentication />;
    } else {
      return <Redirect path="*" to="/eventList" /> ;
    }
  }

  renderEventList = () => (localStorage.getItem('token') ? <EventList /> : <Redirect path="*" to="/auth" />);

  renderAddEvent = () => (localStorage.getItem('token') ? <AddEvent /> : <Redirect path="*" to="/auth" />);

  renderAddUser = () => (!localStorage.getItem('token') ? <Signup /> : <Redirect path="*" to="/auth" />);

  renderProfile = () => (localStorage.getItem('token') ? <Profile /> : <Redirect path="*" to="/auth" />);

  renderEventDetail = () => (localStorage.getItem('token') ? <EventDetail /> : <Redirect path="*" to="/auth" />);

  // renderHome = () => (true ? <Redirect path="*" to="/auth" /> : null );
  render() {
    return (
      <div className="root-container">
        <Switch>
          <Route path="/auth" component={this.renderAuthentication} />
          <Route path="/eventList" render={this.renderEventList} />
          <Route path="/addEvent" render={this.renderAddEvent} />
          <Route path="/signup" render={this.renderAddUser} />
          <Route path="/profile" render={this.renderProfile} />
          <Route path="/eventDetail/:id" render={this.renderEventDetail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}
