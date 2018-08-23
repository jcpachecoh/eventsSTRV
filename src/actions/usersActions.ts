import { IAction } from './action';
import { push } from 'react-router-redux';
import { UserService } from '../services/User';
import { messages } from '../constants/index';
import * as _ from 'lodash';
import { User } from '../models/user';

export const HANDLE_EMAIL = 'HandleEmail';
export type HANDLE_EMAIL = typeof HANDLE_EMAIL;
export const HANDLE_PASSWORD = 'HandlePassword';
export type HANDLE_PASSWORD = typeof HANDLE_PASSWORD;
export const HANDLE_PASSWORD_REPEAT = 'HandlePasswordRepeat';
export type HANDLE_PASSWORD_REPEAT = typeof HANDLE_PASSWORD_REPEAT;
export const HANDLE_FIRST_NAME = 'HandleFirstName';
export type HANDLE_FIRST_NAME = typeof HANDLE_FIRST_NAME;
export const HANDLE_LAST_NAME = 'HandleLastName';
export type HANDLE_LAST_NAME = typeof HANDLE_LAST_NAME;
export const HANDLE_SHOW_ERROR = 'HandleShowError';
export type HANDLE_SHOW_ERROR = typeof HANDLE_SHOW_ERROR;
export const SET_USER_DATA = 'SetUserData';
export type SET_USER_DATA = typeof SET_USER_DATA;
export const SET_ERROR_MODAL = 'SetErrorModal';
export type SET_ERROR_MODAL = typeof SET_ERROR_MODAL;

export class HandleEmail implements IAction {
  type: HANDLE_EMAIL;
  payload: string;
}

export function handleEmail(value: string): HandleEmail {
  return {
    payload: value,
    type: HANDLE_EMAIL
  };
}

export class HandlePassword implements IAction {
  type: HANDLE_PASSWORD;
  payload: string;
}

export function handlePassword(password: string): HandlePassword {
  return {
    payload: password,
    type: HANDLE_PASSWORD
  };
}
export class HandlePasswordRepeat implements IAction {
  type: HANDLE_PASSWORD_REPEAT;
  payload: string;
}

export function handlePasswordRepeat(password: string): HandlePasswordRepeat {
  return {
    payload: password,
    type: HANDLE_PASSWORD_REPEAT
  };
}

export class HandleFirstName implements IAction {
  type: HANDLE_FIRST_NAME;
  payload: string;
}

export function handleFirstName(value: string): HandleFirstName {
  return {
    payload: value,
    type: HANDLE_FIRST_NAME
  };
}

export class HandleLastName implements IAction {
  type: HANDLE_LAST_NAME;
  payload: string;
}

export function handleLastName(value: string): HandleLastName {
  return {
    payload: value,
    type: HANDLE_LAST_NAME
  };
}

export class HandleShowError implements IAction {
  type: HANDLE_SHOW_ERROR;
  payload: string;
}

export function handleShowError(value: string): HandleShowError {
  return {
    payload: value,
    type: HANDLE_SHOW_ERROR
  };
}

export class SetUserData implements IAction {
  type: SET_USER_DATA;
  payload: User;
}

export function setUserData(value: User): SetUserData {
  return {
    payload: value,
    type: SET_USER_DATA
  };
}

export function redirectToSignUp(): any {
  return (dispatch: any) => {
    dispatch(push('/signup'));
  };
}

export function redirectToLogin(): any {
  return (dispatch: any) => {
    dispatch(push('/auth'));
  };
}

export function redirectToProfile(): any {
  return (dispatch: any) => {
    dispatch(push('/profile'));
  };
}

export function logout(): any {
  return(dispatch: any) => {
    localStorage.setItem('token', '');
    dispatch(setErrorModal(false));
    dispatch(push('/auth'));
  };
}
export function validateAuthorization(): any {
  return (dispatch: any, getState: any) => {
    const state = getState(),
      email = state.userReducer.email,
      password = state.userReducer.password;

    return UserService.ValidAuth(email, password)
      .then((response) => {
        if (!response.ok) {
          dispatch(handleErrorPrompt(response.status, response.statusText));
          dispatch(handleShowError(messages.logInFails));
        } else {
          // set token valid
          response.headers.forEach((val, name) => {
            if (name === 'authorization') {
              localStorage.setItem('token', val);
            }
          });
          return response.json();
        }
      })
      .then((data) => {
        if (data) {
          dispatch(handleShowError(''));
          dispatch(setUserData(data));
          dispatch(push('/eventList'));
        }
      });
  };
}

export function submitSignUp(): any {
  return (dispatch: any, getState: any) => {
    const state = getState(),
      email = state.userReducer.email,
      password = state.userReducer.password,
      passwordRepeat = state.userReducer.passwordRepeat,
      firstName = state.userReducer.firstName,
      lastName = state.userReducer.lastName,
      regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (_.isEmpty(email) || _.isEmpty(password) || _.isEmpty(lastName) || _.isEmpty(firstName)) {
      dispatch(handleShowError(messages.completeForm));
      return null;
    } else {
      if (!regex.test(email)) {
        dispatch(handleShowError(messages.invalidEmail));
        return null;
      } else {
        if (password !== passwordRepeat) {
          dispatch(handleShowError(messages.passwordError));
          return null;
        } else {
        return UserService.CreateUser(email, password, firstName, lastName).then((response) => {
            if (!response.ok) {
              dispatch(handleErrorPrompt(response.status, response.statusText));
              dispatch(handleShowError(response.statusText));
            } else {
              dispatch(push('/auth'));
              dispatch(handleShowError(''));
            }
          });
        }
      }
    }
  };
}
export class SetErrorModal implements IAction {
  type: SET_ERROR_MODAL;
  payload: boolean;
}

export function setErrorModal(value: boolean): SetErrorModal {
  return {
    payload: value,
    type: SET_ERROR_MODAL
  };
}

export function handleErrorPrompt(status: number, statusText: string) {
  return (dispatch: any) => {
    console.log('erros' + status, statusText);
    dispatch(setErrorModal(true));
  };
}
export type UsersActions =
  HandleEmail |
  HandlePassword |
  HandlePasswordRepeat |
  HandleFirstName |
  HandleLastName |
  HandleShowError |
  SetUserData |
  SetErrorModal;
