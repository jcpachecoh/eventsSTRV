import { titles } from '../../constants';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { EventsActions, changeTemplate, changeListView } from '../../actions/eventsActions';
import { Glyphicon } from 'react-bootstrap';

interface IEventsHeaderProps {
  changeTemplate: Function;
  changeListView: Function;
}

class EventsHeader extends React.Component<IEventsHeaderProps, {}> {
  public render() {
    const { changeListView, changeTemplate } = this.props;
    return (
      <div className="events-header">
        <ul className="events-header-titles">
          <li>
            <a onClick={() => changeListView('All')}>{titles.eventsHeader.all}</a>
          </li>
          <li>
            <a onClick={() => changeListView('Past')}>{titles.eventsHeader.past}</a>
          </li>
          <li>
            <a onClick={() => changeListView('Future')}>{titles.eventsHeader.future}</a>
          </li>
        </ul>
        <ul className="events-header-buttons">
          <li>
            <a onClick={() => changeTemplate('list')}>
              <Glyphicon glyph="th-list" />
            </a>
          </li>
          <li>
            <a onClick={() => changeTemplate('blocks')}>
              <Glyphicon glyph="th-large" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

type ConnectedDispatchProps = Pick<IEventsHeaderProps, 'changeTemplate' | 'changeListView'>;

export function mapDispatchToProps(dispatch: Dispatch<EventsActions>): ConnectedDispatchProps {
  return {
    changeTemplate: (value: string) => dispatch(changeTemplate(value)),
    changeListView: (value: string) => dispatch(changeListView(value))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(EventsHeader);
