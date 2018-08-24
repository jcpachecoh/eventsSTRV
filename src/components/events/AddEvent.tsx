import * as React from 'react';
import { appLabels } from '../../constants/index';
import { connect } from 'react-redux';
import {
  EventsActions,
  handleTitle,
  handleDescription,
  handleDate,
  handleTime,
  handleCapacity,
  resetEventData,
  submitAddEvent
} from '../../actions/eventsActions';
import { Dispatch } from 'redux';
import { Logo } from '../logo';
import CloseButton from '../CloseButton';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import TimePicker from 'react-times';
import 'react-times/css/material/default.css';
import 'react-times/css/classic/default.css';
import ModalError from '../user/ModalError';

interface IAddEventProps {
  title: string;
  description: string;
  capacity: number;
  date: Date;
  handleTitle: Function;
  handleDescription: Function;
  handleDate: Function;
  handleTime: Function;
  handleCapacity: Function;
  errorForm: any;
  submitAddEvent: Function;
  editFlag: boolean;
  resetEventData: Function;
}

class AddEvent extends React.Component<IAddEventProps, {}> {
  componentDidMount() {
    if (!this.props.editFlag) {
      this.props.resetEventData();
    }
  }
  public render() {
    const {
      title,
      description,
      capacity,
      date,
      handleTitle,
      handleDescription,
      handleDate,
      handleTime,
      handleCapacity,
      errorForm,
      submitAddEvent,
      editFlag
    } = this.props;
    return (
      <div>
        <div className="events-add-header">
          <Logo />
          <CloseButton />
        </div>
        <div className="events-add">
          <div className="input-box">
            <label>{appLabels.title}</label>
            <input type="text" value={title} onChange={(e: any) => handleTitle(e.target.value)} />
            {errorForm.title && <div className="error-span">{errorForm.title}</div>}
          </div>
          <div className="input-box">
            <label>{appLabels.description}</label>
            <input type="text" value={description} onChange={(e: any) => handleDescription(e.target.value)} />
            {errorForm.description && <div className="error-span">{errorForm.description}</div>}
          </div>
          <div className="input-box">
            <label>{appLabels.date}</label>
            <DayPickerInput
              value={date}
              onDayChange={(day) => handleDate(day)}
              month={new Date()}
              dayPickerProps={{
                selectedDays: date,
                disabledDays: {before: new Date() }
              }}
            />
            {errorForm.date && <div className="error-span">{errorForm.date}</div>}
          </div>
          <div className="input-box">
            <label>{appLabels.time}</label>
            <TimePicker
              focused={false}
              onTimeChange={(time) => {
                handleTime(time);
              }}
              theme="classic"
            />
            {errorForm.time && <div className="error-span">{errorForm.time}</div>}
          </div>
          <div className="input-box">
            <label>{appLabels.capacity}</label>
            <input type="text" value={capacity} onChange={(e: any) => handleCapacity(e.target.value)} />
            {errorForm.capacity && <div className="error-span">{errorForm.capacity}</div>}
          </div>
          <div className="button-box">
            {!editFlag && <button onClick={() => submitAddEvent('add')}>CREATE NEW EVENT</button>}
            {editFlag && (
              <button className="edit-button" onClick={() => submitAddEvent('edit')}>
                EDIT EVENT
              </button>
            )}
          </div>
        </div>
        <ModalError />
      </div>
    );
  }
}

type ConnectedStateProps = Pick<IAddEventProps, 'title' | 'description' | 'capacity' | 'errorForm' | 'editFlag' | 'date'>;
export function mapStateToProps({ eventsReducer: { event, errorForm, editFlag } }: any): ConnectedStateProps {
  return {
    title: event.title,
    description: event.description,
    capacity: event.capacity,
    date: event.date,
    errorForm: errorForm,
    editFlag: editFlag
  };
}

type ConnectedDispatchProps = Pick<
  IAddEventProps,
  'handleTitle' | 'handleDescription' | 'handleDate' | 'handleTime' | 'handleCapacity' | 'submitAddEvent' | 'resetEventData'
>;

export function mapDispatchToProps(dispatch: Dispatch<EventsActions>): ConnectedDispatchProps {
  return {
    handleTitle: (value: string) => dispatch(handleTitle(value)),
    handleDescription: (value: string) => dispatch(handleDescription(value)),
    handleDate: (value: Date) => dispatch(handleDate(value)),
    handleTime: (value: string) => dispatch(handleTime(value)),
    handleCapacity: (value: number) => dispatch(handleCapacity(value)),
    submitAddEvent: (value: string) => dispatch(submitAddEvent(value)),
    resetEventData: () => dispatch(resetEventData())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddEvent);
