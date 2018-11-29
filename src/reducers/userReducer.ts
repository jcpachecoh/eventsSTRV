import { SET_ERROR_MODAL } from '../actions/usersActions';
import {
	HANDLE_EMAIL,
	UsersActions,
	HANDLE_PASSWORD,
	HANDLE_FIRST_NAME,
	HANDLE_LAST_NAME,
	HANDLE_SHOW_ERROR,
	HANDLE_PASSWORD_REPEAT,
	SET_USER_DATA
} from '../actions/usersActions';
import { errorsForm, regexEmail, regexPass } from '../constants';

const newObject = (state: any, newData: any) => Object.assign({}, state, newData);

export const defaultUser = {
	email: '',
	emailError: '',
	password: '',
	passwordError: '',
	passwordRepeat: '',
	firstName: '',
	firstNameError: '',
	lastName: '',
	lastNameError: '',
	showError: false,
	userLogged: {},
	showErrorModal: false
};

export const userReducer = (state = defaultUser, action: UsersActions) => {
	switch (action.type) {
		case HANDLE_EMAIL:
			return newObject(state, {
				email: action.payload,
				emailError: !regexEmail.test(String(action.payload).toLowerCase()) ? errorsForm.email : ''
			});
		case HANDLE_PASSWORD:
			return newObject(state, {
				password: action.payload,
				passwordError: !regexPass.test(action.payload) ? errorsForm.passwordValidation : ''
			});
		case HANDLE_PASSWORD_REPEAT:
			return newObject(state, {
				passwordRepeat: action.payload
			});
		case HANDLE_FIRST_NAME:
			return newObject(state, {
				firstName: action.payload,
				firstNameError: action.payload.length < 6 ? errorsForm.commonField : ''
			});
		case HANDLE_LAST_NAME:
			return newObject(state, {
				lastName: action.payload,
				lastNameError: action.payload.length < 6 ? errorsForm.commonField : ''
			});
		case HANDLE_SHOW_ERROR:
			return newObject(state, {
				showError: action.payload
			});
		case SET_USER_DATA:
			return newObject(state, {
				userLogged: action.payload
			});
		case SET_ERROR_MODAL:
			return newObject(state, {
				showErrorModal: action.payload
			});
		default:
			return state;
	}
};
