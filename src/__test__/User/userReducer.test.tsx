jest.unmock('redux-mock-store');
jest.unmock('redux');
import { createStore, applyMiddleware } from 'redux';
import { defaultUser } from '../../reducers/userReducer';
import rootReducer from '../../reducers';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import {
	handleEmail,
	handleFirstName,
	handleLastName,
	handlePassword,
	handlePasswordRepeat,
	setUserData,
	setErrorModal,
	submitSignUp
} from '../../actions/usersActions';
import { errorsForm } from '../../constants';
import createHistory from 'history/createBrowserHistory';

describe('Test User reducer', () => {
	const mockStore = configureMockStore([ thunk ]);
	let defaultUserMock: any,
		store: any,
		storeActions: any,
		action: any,
		email: string = 'brucebanner@strv.com',
		password: string = 'D@nilo123',
		firstName: string = 'Bruce Willis',
		invalidFile: string = 'bg',
		lastName: string = 'Banner',
		userData: any = {
			firstName: firstName,
			lastName: lastName,
			password: password,
			email: email
		},
		history = createHistory(),
		middleware = [ thunk, routerMiddleware(history) ];

	beforeEach(() => {
		defaultUserMock = {
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
		store = createStore(rootReducer, defaultUserMock, applyMiddleware(...middleware));
		storeActions = mockStore(defaultUser);
	});
	describe('Test general actions reducer transactions', () => {
		it('Return initial state', () => {
			expect(defaultUserMock).toEqual(defaultUser);
		});

		it('should call HandleEmail function', () => {
			storeActions.dispatch(handleEmail(email));
			action = storeActions.getActions();
			expect(action[0].type).toBe('HandleEmail');
		});

		it('should change payload calling HandleEmail function', () => {
			storeActions.dispatch(handleEmail(email));
			action = storeActions.getActions();
			expect(action[0].payload).toBe(email);
		});

		it('should change store  with handleEmail', () => {
			store.dispatch(handleEmail(email));
			store = store.getState();
			expect(store.userReducer.email).toBe(email);
		});

		it('should call HandleFirstName function', () => {
			storeActions.dispatch(handleFirstName(firstName));
			action = storeActions.getActions();
			expect(action[0].type).toBe('HandleFirstName');
		});

		it('should change payload calling HandleFirstName function', () => {
			storeActions.dispatch(handleFirstName(firstName));
			action = storeActions.getActions();
			expect(action[0].payload).toBe(firstName);
		});

		it('should change store  with HandleFirstName', () => {
			store.dispatch(handleFirstName(firstName));
			store = store.getState();
			expect(store.userReducer.firstName).toBe(firstName);
		});

		it('should call HandleLastName function', () => {
			storeActions.dispatch(handleLastName(lastName));
			action = storeActions.getActions();
			expect(action[0].type).toBe('HandleLastName');
		});

		it('should change payload calling HandleLastName function', () => {
			storeActions.dispatch(handleLastName(lastName));
			action = storeActions.getActions();
			expect(action[0].payload).toBe(lastName);
		});

		it('should change store  with HandleLastName', () => {
			store.dispatch(handleLastName(lastName));
			store = store.getState();
			expect(store.userReducer.lastName).toBe(lastName);
		});

		it('should call HandlePassword function', () => {
			storeActions.dispatch(handlePassword(password));
			action = storeActions.getActions();
			expect(action[0].type).toBe('HandlePassword');
		});

		it('should change payload calling HandlePassword function', () => {
			storeActions.dispatch(handlePassword(password));
			action = storeActions.getActions();
			expect(action[0].payload).toBe(password);
		});

		it('should change store  with HandlePassword', () => {
			store.dispatch(handlePassword(password));
			store = store.getState();
			expect(store.userReducer.password).toBe(password);
		});

		it('should call HandlePasswordRepeat function', () => {
			storeActions.dispatch(handlePasswordRepeat(password));
			action = storeActions.getActions();
			expect(action[0].type).toBe('HandlePasswordRepeat');
		});

		it('should change payload calling HandlePasswordRepeat function', () => {
			storeActions.dispatch(handlePasswordRepeat(password));
			action = storeActions.getActions();
			expect(action[0].payload).toBe(password);
		});

		it('should change store  with HandlePasswordRepeat', () => {
			store.dispatch(handlePasswordRepeat(password));
			store = store.getState();
			expect(store.userReducer.passwordRepeat).toBe(password);
		});

		it('should call SetUserData function', () => {
			storeActions.dispatch(setUserData(userData));
			action = storeActions.getActions();
			expect(action[0].type).toBe('SetUserData');
		});

		it('should change payload calling setUserData function', () => {
			storeActions.dispatch(setUserData(userData));
			action = storeActions.getActions();
			expect(action[0].payload).toBe(userData);
		});

		it('should change store  with HandlePasswordRepeat', () => {
			store.dispatch(setUserData(userData));
			store = store.getState();
			expect(store.userReducer.userLogged).toBe(userData);
		});

		it('should call SetErrorModal function', () => {
			storeActions.dispatch(setErrorModal(true));
			action = storeActions.getActions();
			expect(action[0].type).toBe('SetErrorModal');
		});

		it('should change payload calling SetErrorModal function', () => {
			storeActions.dispatch(setErrorModal(true));
			action = storeActions.getActions();
			expect(action[0].payload).toBe(true);
		});

		it('should change store  with SetErrorModal', () => {
			store.dispatch(setErrorModal(true));
			store = store.getState();
			expect(store.userReducer.showErrorModal).toBe(true);
		});
		it('should show an error first name field when the entry is not valid', () => {
			store.dispatch(handleFirstName(invalidFile));
			store = store.getState();
			expect(store.userReducer.firstNameError).toBe(errorsForm.commonField);
		});
		it('should show an error last name field when the entry is not valid', () => {
			store.dispatch(handleLastName(invalidFile));
			store = store.getState();
			expect(store.userReducer.lastNameError).toBe(errorsForm.commonField);
		});
		it('should show an error email field when the entry is not valid', () => {
			store.dispatch(handleEmail(invalidFile));
			store = store.getState();
			expect(store.userReducer.emailError).toBe(errorsForm.email);
		});
	});
	describe('Testing submit signup information  ', () => {
		it('handles submit information action in signup form', async () => {
			store.dispatch(handleEmail(email));
			store.dispatch(handleFirstName(firstName));
			store.dispatch(handleLastName(lastName));
			store.dispatch(handlePassword(password));
			store.dispatch(handlePasswordRepeat(password));
			await store.dispatch(submitSignUp());
			store = store.getState();
			expect(store.userReducer.emailError).toEqual('');
			expect(store.userReducer.firstNameError).toEqual('');
			expect(store.userReducer.lastNameError).toEqual('');
			expect(store.userReducer.passwordError).toEqual('');
			expect(store.userReducer.showError).toEqual('')
		});
	});
});
