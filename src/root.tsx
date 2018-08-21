import * as React from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';
import { Authentication } from './components/authentication/Authentication';
import EventList from './components/events/EventList';
import AddEvent from './components/events/AddEvent';
import Signup from './components/authentication/login/Signup';
import Profile from './components/user/Profile/Profile';

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
  renderAuthentication = () => (!localStorage.getItem('token') ? <Authentication /> : <Redirect to="/eventList" />);

  renderEventList = () => (localStorage.getItem('token') ? <EventList /> : <Redirect path="*" to="/auth" />);

  renderAddEvent = () => (localStorage.getItem('token') ? <AddEvent /> : <Redirect path="*" to="/auth" />);

  renderAddUser = () => (!localStorage.getItem('token') ? <Signup /> : <Redirect path="*" to="/auth" />);

  renderProfile = () => (localStorage.getItem('token') ? <Profile /> : <Redirect path="*" to="/auth" />);
  render() {
    return (
      <div className="root-container">
        <Switch>
          <Route path="/auth" component={this.renderAuthentication} />
          <Route path="/eventList" render={this.renderEventList} />
          <Route path="/addEvent" render={this.renderAddEvent} />
          <Route path="/signup" render={this.renderAddUser} />
          <Route path="/profile" render={this.renderProfile} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}
