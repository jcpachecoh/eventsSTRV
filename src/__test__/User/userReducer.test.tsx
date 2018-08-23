jest.unmock('redux-mock-store');
jest.unmock('redux');
import { createStore } from 'redux';
import { defaultUser, userReducer } from '../../reducers/userReducer';
import configureMockStore from 'redux-mock-store';
import { handleEmail, handleFirstName, handleLastName, handlePassword, handlePasswordRepeat, setUserData, setErrorModal } from '../../actions/usersActions';

describe('Test User reducer', () => {
    const mockStore = configureMockStore();
    let defaultUserMock: any,
        store: any,
        storeActions: any,
        action: any,
        email: string = 'brucebanner@strv.com',
        password: string = 'Kill3r',
        firstName: string = 'Bruce',
        lastName: string = 'Banner',
        userData: any = {
            firstName: firstName,
            lastName: lastName,
            password: password,
            email: email
        };

    beforeEach(() => {
        store = createStore(userReducer);
        defaultUserMock = {
            email: '',
            password: '',
            passwordRepeat: '',
            lastName: '',
            firstName: '',
            showError: false,
            userLogged: {},
            showErrorModal: false
        };
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
            expect(store.email).toBe(email);
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
            expect(store.firstName).toBe(firstName);
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
            expect(store.lastName).toBe(lastName);
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
            expect(store.password).toBe(password);
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
            expect(store.passwordRepeat).toBe(password);
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
            expect(store.userLogged).toBe(userData);
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
            expect(store.showErrorModal).toBe(true);
        });
    });
});