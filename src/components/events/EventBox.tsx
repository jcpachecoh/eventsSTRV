import { Event } from '../../models/event';
import * as React from 'react';
import { formatDate } from '../../scripts/index';

interface IEventProps {
  event: Event;
}
export class EventBox extends React.Component<IEventProps, {}> {
  public render() {
    const { event } = this.props;
    return (
      <div className="event-box">
        <span className="event-title">{event.title}</span>
        <span className="event-description">{event.description}</span>
        <span className="event-author">
          {event.owner.firstName} {event.owner.lastName}
        </span>
        <span className="event-date">{formatDate(event.createdAt)}</span>
        <span className="event-capacity">
          {event.attendees.length} of {event.capacity}
        </span>
        <button > JOIN</button>
      </div>
    );
  }
}
