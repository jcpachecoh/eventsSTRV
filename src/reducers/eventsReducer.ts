import { errorsForm } from '../constants/index';
import { HANDLE_ERROR_FORM } from '../actions/eventsActions';
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
