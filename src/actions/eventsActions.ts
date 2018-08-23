import { IAction } from './action';
import { Event } from '../models/event';
import { EventService } from '../services/Event';
import { handleErrorPrompt } from './usersActions';
import { push } from 'react-router-redux';
import * as _ from 'lodash';

export const SET_ALL_EVENTS = 'SetAllEvents';
export type SET_ALL_EVENTS = typeof SET_ALL_EVENTS;
export const HANDLE_TITLE = 'HandleTitle';
export type HANDLE_TITLE = typeof HANDLE_TITLE;
export const HANDLE_DESCRIPTION = 'HandleDescription';
export type HANDLE_DESCRIPTION = typeof HANDLE_DESCRIPTION;
export const HANDLE_DATE = 'HandleDate';
export type HANDLE_DATE = typeof HANDLE_DATE;
export const HANDLE_TIME = 'HandleTime';
export type HANDLE_TIME = typeof HANDLE_TIME;
export const HANDLE_CAPACITY = 'HandleCapacity';
export type HANDLE_CAPACITY = typeof HANDLE_CAPACITY;
export const CHANGE_LIST_VIEW = 'ChangeListView';
export type CHANGE_LIST_VIEW = typeof CHANGE_LIST_VIEW;
export const CHANGE_TEMPLATE = 'ChangeTemplate';
export type CHANGE_TEMPLATE = typeof CHANGE_TEMPLATE;
export const SET_LOADING = 'SetLoading';
export type SET_LOADING = typeof SET_LOADING;
export const HANDLE_ERROR_FORM = 'HandleErrorForm';
export type HANDLE_ERROR_FORM = typeof HANDLE_ERROR_FORM;
export const SHOW_CONFIRM = 'ShowConfirm';
export type SHOW_CONFIRM = typeof SHOW_CONFIRM;
export const SET_EVENT = 'SetEvent';
export type SET_EVENT = typeof SET_EVENT;
export const SET_EDIT_FLAG = 'SetEditFlag';
export type SET_EDIT_FLAG = typeof SET_EDIT_FLAG;

export class HandleTitle implements IAction {
  type: HANDLE_TITLE;
  payload: string;
}

export function handleTitle(value: string): HandleTitle {
  return {
    payload: value,
    type: HANDLE_TITLE
  };
}

export class HandleDescription implements IAction {
  type: HANDLE_DESCRIPTION;
  payload: string;
}

export function handleDescription(value: string): HandleDescription {
  return {
    payload: value,
    type: HANDLE_DESCRIPTION
  };
}

export class HandleDate implements IAction {
  type: HANDLE_DATE;
  payload: Date;
}

export function handleDate(value: Date): HandleDate {
  return {
    payload: value,
    type: HANDLE_DATE
  };
}

export class HandleTime implements IAction {
  type: HANDLE_TIME;
  payload: any;
}

export function handleTime(value: any): HandleTime {
  return {
    payload: value,
    type: HANDLE_TIME
  };
}

export class HandleCapacity implements IAction {
  type: HANDLE_CAPACITY;
  payload: number;
}

export function handleCapacity(value: number): HandleCapacity {
  return {
    payload: value,
    type: HANDLE_CAPACITY
  };
}

export class SetAllEvents implements IAction {
  type: SET_ALL_EVENTS;
  payload: Event[];
}

export function setAllEvents(eventsToRender: Event[]): SetAllEvents {
  return {
    payload: eventsToRender,
    type: SET_ALL_EVENTS
  };
}

export class SetEvent implements IAction {
  type: SET_EVENT;
  payload: Event;
}

export function setEvent(eventToRender: Event): SetEvent {
  return {
    payload: eventToRender,
    type: SET_EVENT
  };
}

export class SetEditFlag implements IAction {
  type: SET_EDIT_FLAG;
  payload: boolean;
}

export function setEditFlag(value: boolean): SetEditFlag {
  return {
    payload: value,
    type: SET_EDIT_FLAG
  };
}

export function editEvent(event: Event): any {
  return (dispatch: any) => {
    if (event) {
      dispatch(setEvent(event));
      dispatch(setEditFlag(true));
      dispatch(push('/addEvent'));
    }
  };
}
export function attentEvent(id: string): any {
  return(dispatch: any) => {
    return EventService.AttentEvent(id)
      .then((response) => {
        if (!response.ok) {
          dispatch(handleErrorPrompt(response.status, response.statusText));
        } else {
          location.reload();
          return response.json();
        }
      });
  };
}

export function leaveEvent(id: string): any {
  return (dispatch: any) => {
    return EventService.LeaveEvent(id)
    .then((response) => {
      if (!response.ok) {
        dispatch(handleErrorPrompt(response.status, response.statusText));
      } else {
        location.reload();
        return response.json();
      }
    });
  };
}

export function deleteEvent(id: string): any {
  return (dispatch: any) => {
    return EventService.DeleteEvent(id)
    .then((response) => {
      if (!response.ok) {
        dispatch(handleErrorPrompt(response.status, response.statusText));
      } else {
        dispatch(push('/eventList'));
      }
    });
  };
}

export function submitAddEvent(type: string): any {
  return(dispatch: any, getState: any) => {
    let state = getState(),
      title = state.eventsReducer.event.title,
      description = state.eventsReducer.event.description,
      date = state.eventsReducer.event.date,
      time = state.eventsReducer.event.time,
      capacity = state.eventsReducer.event.capacity,
      id = state.eventsReducer.event._id;
    //   startsAt;

    // if (date && time) {
    //   startsAt = date.setHours(time.hour, time.minute, 0, 0);
    // }

    if (_.isEmpty(title)) { dispatch(handleErrorForm('title'));  }
    if (_.isEmpty(description)) { dispatch(handleErrorForm('description')); }
    if (!date) { dispatch(handleErrorForm('date'));  }
    if (_.isEmpty(time)) { dispatch(handleErrorForm('time'));  }
    if (_.isEmpty(capacity)) { dispatch(handleErrorForm('capacity'));  }
    if (type === 'add') {
        return EventService.CreateEvent(title, description, date, capacity)
                .then((response) => {
                  if (!response.ok) {
                    dispatch(handleErrorPrompt(response.status, response.statusText));
                  } else {
                    dispatch(push('/eventList'));
                    return response.json();
                  }
              });
        } else {
          return EventService.EditEvent(title, description, date, capacity, id)
          .then((response) => {
            if (!response.ok) {
              dispatch(handleErrorPrompt(response.status, response.statusText));
            } else {
              dispatch(push('/eventList'));
              return response.json();
            }
        });
      }
  };
}

export function redirectToAddEvent(): any {
  return (dispatch: any) => {
    dispatch(push('/addEvent'));
  };
}

export function redirectToEventDetail(id: string): any {
  return (dispatch: any) => {
    dispatch(push(`/eventDetail/${id}`));
  };
}
export function redirectToEventList(): any {
  return (dispatch: any) => {
    dispatch(push('/eventList'));
  };
}

export function getEventDetail(id: string): any {
  return (dispatch: any) => {
    return EventService.GetEventDetail(id)
      .then((response) => {
        if (!response.ok) {
          dispatch(handleErrorPrompt(response.status, response.statusText));
        } else {
          return response.json();
        }
      })
      .then((data) => {
        dispatch(setLoading(false));
        dispatch(setEvent(data));
      });
  };
}
export function getEvents(): any {
  return (dispatch: any) => {
    return EventService.GetEvents()
      .then((response) => {
        if (!response.ok) {
          dispatch(handleErrorPrompt(response.status, response.statusText));
        } else {
          return response.json();
        }
      })
      .then((data) => {
        dispatch(setLoading(false));
        dispatch(setAllEvents(data));
      });
  };
}

export function getEventsProfile(): any {
  return (dispatch: any) => {
    return EventService.GetEvents()
      .then((response) => {
        if (!response.ok) {
          dispatch(handleErrorPrompt(response.status, response.statusText));
        } else {
          return response.json();
        }
      })
      .then((data) => {
        dispatch(setLoading(false));
        dispatch(setAllEvents(data));
      });
  };
}

export class ChangeTemplate implements IAction {
  type: CHANGE_TEMPLATE;
  payload: string;
}

export function changeTemplate(value: string): ChangeTemplate {
  return {
    payload: value,
    type: CHANGE_TEMPLATE
  };
}

export class ChangeListView implements IAction {
  type: CHANGE_LIST_VIEW;
  payload: string;
}

export function changeListView(value: string): ChangeListView {
  return {
    payload: value,
    type: CHANGE_LIST_VIEW
  };
}

export class SetLoading implements IAction {
  type: SET_LOADING;
  payload: boolean;
}

export function setLoading(flag: boolean): SetLoading {
  return {
    type: SET_LOADING,
    payload: flag
  };
}

export class HandleErrorForm implements IAction {
  type: HANDLE_ERROR_FORM;
  payload: string;
}

export function handleErrorForm(type: string): HandleErrorForm {
  return {
    type: HANDLE_ERROR_FORM,
    payload: type
  };
}

export class ShowConfirm implements IAction {
  type: SHOW_CONFIRM;
  payload: boolean;
}

export function showConfirm(value: boolean): ShowConfirm {
  return {
    payload: value,
    type: SHOW_CONFIRM
  };
}

export type EventsActions = SetAllEvents |
HandleTitle |
HandleDescription |
HandleDate |
HandleTime |
HandleCapacity |
ChangeTemplate |
ChangeListView |
SetLoading |
HandleErrorForm |
ShowConfirm |
SetEvent |
SetEditFlag;
