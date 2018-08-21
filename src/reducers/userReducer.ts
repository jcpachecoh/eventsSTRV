import { HANDLE_EMAIL,
  UsersActions, HANDLE_PASSWORD,
  HANDLE_FIRST_NAME,
  HANDLE_LAST_NAME,
  HANDLE_SHOW_ERROR,
  HANDLE_PASSWORD_REPEAT,
  SET_USER_DATA } from '../actions/usersActions';

const newObject = (state: any, newData: any) => Object.assign({}, state, newData);

export const defaultUser = {
  email: '',
  password: '',
  passwordRepeat: '',
  lastName: '',
  firstName: '',
  showError: false,
  userLogged: {}
};

export const userReducer = (state = defaultUser, action: UsersActions) => {
  switch (action.type) {
    case HANDLE_EMAIL:
      return newObject(state, {
        email: action.payload
      });
    case HANDLE_PASSWORD:
      return newObject(state, {
        password: action.payload
      });
    case HANDLE_PASSWORD_REPEAT:
      return newObject(state, {
        passwordRepeat: action.payload
      });
    case HANDLE_FIRST_NAME:
      return newObject(state, {
        firstName: action.payload
      });
    case HANDLE_LAST_NAME:
      return newObject(state, {
        lastName: action.payload
      });
    case HANDLE_SHOW_ERROR:
      return newObject(state, {
        showError: action.payload
      });
    case SET_USER_DATA: 
      return newObject(state, {
        userLogged: action.payload
      });
    default:
      return state;
  }
};
