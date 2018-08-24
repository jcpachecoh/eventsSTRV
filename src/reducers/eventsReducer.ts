import { errorsForm } from '../constants/index';
import { HANDLE_ERROR_FORM, SET_EVENT, SHOW_CONFIRM, SET_EDIT_FLAG, SET_LIST_VIEW, RESET_EVENT_DATA } from '../actions/eventsActions';
import {
  EventsActions,
  SET_ALL_EVENTS,
  HANDLE_TITLE,
  HANDLE_DESCRIPTION,
  HANDLE_DATE,
  HANDLE_TIME,
  HANDLE_CAPACITY,
  SET_LOADING
} from '../actions/eventsActions';

export const defaultEvent = {
  events: [],
  loading: true,
  showModal: false,
  editFlag: false,
  event: {
    id: '',
    title: '',
    description: '',
    startsAt: '',
    capacity: '',
    owner: {
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      createdAt: '',
      updatedAt: ''
    },
    attendees: [],
    createdAt: '',
    updatedAt: ''
  },
  errorForm: {
    title: '',
    description: '',
    date: '',
    time: '',
    capacity: ''
  }
};

export const eventsReducer = (state = defaultEvent, action: EventsActions) => {
  switch (action.type) {
    case HANDLE_TITLE:
      return { ...state, event: { ...state.event, title: action.payload }, errorForm: {...state.errorForm, title: ''} };
    case HANDLE_DESCRIPTION:
      return { ...state, event: { ...state.event, description: action.payload }, errorForm: {...state.errorForm, description: ''} };
    case HANDLE_DATE:
      return { ...state, event: { ...state.event, date: action.payload }, errorForm: {...state.errorForm, date: ''}};
    case HANDLE_TIME:
      return { ...state, event: { ...state.event, time: action.payload }, errorForm: {...state.errorForm, time: ''} };
    case HANDLE_CAPACITY:
      return { ...state, event: { ...state.event, capacity: action.payload }, errorForm: {...state.errorForm, capacity: ''} };
    case SET_ALL_EVENTS:
      return { ...state, events: action.payload };
    case SET_LOADING:
      return {...state, loading: action.payload };
    case SET_EVENT:
      return {...state, event: action.payload };
    case SHOW_CONFIRM:
      return {...state, showModal: action.payload };
    case SET_EDIT_FLAG:
      return {...state, editFlag: action.payload };
    case RESET_EVENT_DATA:
    return {...state, event: {id: '',
    title: '',
    description: '',
    startsAt: '',
    capacity: '',
    owner: {
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      createdAt: '',
      updatedAt: ''
    },
    attendees: [],
    createdAt: '',
    updatedAt: ''} };
    case SET_LIST_VIEW:
      let listView = action.payload,
        events: any = state.events,
        currentDate: Date = new Date();

      if (listView === 'Past') {
        events = events.filter((item) => {
          return new Date(item.startsAt) < currentDate;
        });
      }

      if (listView === 'Future') {
        events = events.filter((item) => {
          return new Date(item.startsAt) > currentDate;
        });
      }

      if (listView === 'All') {
        events = state.events;
      }
      console.log(events);

      return {...state, events: events };
    case HANDLE_ERROR_FORM:
      let errorForm: any = state.errorForm;

      if (action.payload === 'title') {
        errorForm = {
          title: errorsForm.title
        };
      }
      if (action.payload === 'description') {
        errorForm = {
          ...errorForm,
          description: errorsForm.description
        };
      }
      if (action.payload === 'date') {
        errorForm = { ...errorForm,
          date: errorsForm.date
        };
      }
      if (action.payload === 'time') {
        errorForm = { ...errorForm,
          time: errorsForm.time
        };
      }
      if (action.payload === 'capacity') {
        errorForm = { ...errorForm,
          capacity: errorsForm.capacity
        };
      }
      return {...state, errorForm: errorForm };
    default:
      return state;
  }
};
