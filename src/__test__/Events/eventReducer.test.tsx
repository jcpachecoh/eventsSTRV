jest.unmock('redux-mock-store');
jest.unmock('redux');
import { createStore } from 'redux';
import configureMockStore from 'redux-mock-store';
import { defaultEvent, eventsReducer } from '../../reducers/eventsReducer';
import { setAllEvents, handleTitle, handleDescription, handleDate, handleTime, handleCapacity, setEvent, showConfirm, setEditFlag } from '../../actions/eventsActions';

describe('Test Event reducer', () => {
    const mockStore = configureMockStore();
    let defaultEventMock: any,
        store: any,
        storeActions: any,
        action: any,
        title: string = 'event 1',
        description: string = 'some descrption',
        date: Date = new Date(),
        time: any = {hours: 12, minute: 20},
        capacity: number = 20,
        events: any = [
            {
              'id': '58493db9691ecc0d3da51bfd',
              'title': 'Awesome event',
              'description': 'A bunch of people doing awesome stuff',
              'startsAt': '2016-12-08T10:46:33.901Z',
              'capacity': 50,
              'owner': {
                'id': '58493e0b691ecc0d3da51bfe',
                'firstName': 'Robert',
                'lastName': 'Rossmann',
                'email': 'robert.rossmann@strv.com',
                'createdAt': '2016-12-08T10:46:33.901Z',
                'updatedAt': '2016-12-08T10:46:33.901Z'
              },
              'attendees': [
                {
                  'id': '58493e0b691ecc0d3da51bfe',
                  'firstName': 'Robert',
                  'lastName': 'Rossmann',
                  'email': 'robert.rossmann@strv.com',
                  'createdAt': '2016-12-08T10:46:33.901Z',
                  'updatedAt': '2016-12-08T10:46:33.901Z'
                }
              ],
              'createdAt': '2016-12-08T10:46:33.901Z',
              'updatedAt': '2016-12-08T10:46:33.901Z'
            }
          ];

    beforeEach(() => {
        store = createStore(eventsReducer);
        defaultEventMock = {
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
        storeActions = mockStore(defaultEvent);
    });
    describe('Test general actions reducer transactions', () => {
        it('Return initial state', () => {
            expect(defaultEventMock).toEqual(defaultEvent);
        });

        it('should call SetAllEvents function', () => {
            storeActions.dispatch(setAllEvents(events));
            action = storeActions.getActions();
            expect(action[0].type).toBe('SetAllEvents');
        });

        it('should change payload calling SetAllEvents function', () => {
            storeActions.dispatch(setAllEvents(events));
            action = storeActions.getActions();
            expect(action[0].payload).toBe(events);
        });

        it('should change store with setAllEvents', () => {
            store.dispatch(setAllEvents(events));
            store = store.getState();
            expect(store.events).toBe(events);
        });

        it('should call HandleTitle function', () => {
            storeActions.dispatch(handleTitle(title));
            action = storeActions.getActions();
            expect(action[0].type).toBe('HandleTitle');
        });

        it('should change payload calling HandleTitle function', () => {
            storeActions.dispatch(handleTitle(title));
            action = storeActions.getActions();
            expect(action[0].payload).toBe(title);
        });

        it('should change store  with HandleTitle', () => {
            store.dispatch(handleTitle(title));
            store = store.getState();
            expect(store.event.title).toBe(title);
        });

        it('should call HandleDescription function', () => {
            storeActions.dispatch(handleDescription(description));
            action = storeActions.getActions();
            expect(action[0].type).toBe('HandleDescription');
        });

        it('should change payload calling HandleDescription function', () => {
            storeActions.dispatch(handleDescription(description));
            action = storeActions.getActions();
            expect(action[0].payload).toBe(description);
        });

        it('should change store  with HandleDescription', () => {
            store.dispatch(handleDescription(description));
            store = store.getState();
            expect(store.event.description).toBe(description);
        });

        it('should call HandleDate function', () => {
            storeActions.dispatch(handleDate(date));
            action = storeActions.getActions();
            expect(action[0].type).toBe('HandleDate');
        });

        it('should change payload calling HandleDate function', () => {
            storeActions.dispatch(handleDate(date));
            action = storeActions.getActions();
            expect(action[0].payload).toBe(date);
        });

        it('should change store  with HandleDate', () => {
            store.dispatch(handleDate(date));
            store = store.getState();
            expect(store.event.date).toBe(date);
        });

        it('should call HandleTime function', () => {
            storeActions.dispatch(handleTime(time));
            action = storeActions.getActions();
            expect(action[0].type).toBe('HandleTime');
        });

        it('should change payload calling HandleTime function', () => {
            storeActions.dispatch(handleTime(time));
            action = storeActions.getActions();
            expect(action[0].payload).toBe(time);
        });

        it('should change store  with HandleTime', () => {
            store.dispatch(handleTime(time));
            store = store.getState();
            expect(store.event.time).toBe(time);
        });

        it('should call HandleCapacity function', () => {
            storeActions.dispatch(handleCapacity(capacity));
            action = storeActions.getActions();
            expect(action[0].type).toBe('HandleCapacity');
        });

        it('should change payload calling HandleCapacity function', () => {
            storeActions.dispatch(handleCapacity(capacity));
            action = storeActions.getActions();
            expect(action[0].payload).toBe(capacity);
        });

        it('should change store with HandleCapacity', () => {
            store.dispatch(handleCapacity(capacity));
            store = store.getState();
            expect(store.event.capacity).toBe(capacity);
        });

        it('should call SetEvent function', () => {
            storeActions.dispatch(setEvent(events[0]));
            action = storeActions.getActions();
            expect(action[0].type).toBe('SetEvent');
        });

        it('should change payload calling SetEvent function', () => {
            storeActions.dispatch(setEvent(events[0]));
            action = storeActions.getActions();
            expect(action[0].payload).toBe(events[0]);
        });

        it('should change store with SetEvent', () => {
            store.dispatch(setEvent(events[0]));
            store = store.getState();
            expect(store.event).toBe(events[0]);
        });

        it('should call ShowConfirm function', () => {
            storeActions.dispatch(showConfirm(true));
            action = storeActions.getActions();
            expect(action[0].type).toBe('ShowConfirm');
        });

        it('should change payload calling ShowConfirm function', () => {
            storeActions.dispatch(showConfirm(true));
            action = storeActions.getActions();
            expect(action[0].payload).toBe(true);
        });

        it('should change store  with ShowConfirm', () => {
            store.dispatch(showConfirm(true));
            store = store.getState();
            expect(store.showModal).toBe(true);
        });

        it('should call SetEditFlag function', () => {
            storeActions.dispatch(setEditFlag(true));
            action = storeActions.getActions();
            expect(action[0].type).toBe('SetEditFlag');
        });

        it('should change payload calling SetEditFlag function', () => {
            storeActions.dispatch(setEditFlag(true));
            action = storeActions.getActions();
            expect(action[0].payload).toBe(true);
        });

        it('should change store  with SetEditFlag', () => {
            store.dispatch(setEditFlag(true));
            store = store.getState();
            expect(store.editFlag).toBe(true);
        });
    });
});