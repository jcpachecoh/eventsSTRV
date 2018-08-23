import { mount } from 'enzyme';
import * as React from 'react';
import store from '../../store-index';
import { Provider } from 'react-redux';
import { EventBox } from '../../components/events/EventBox';

describe('--------Create EventBox tests-------------', () => {
  let wrapper: any,
    mockFn: Function = jest.fn();
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <EventBox
          event={{
            '_id': '58493db9691ecc0d3da51bfd',
            'title': 'Awesome event',
            'description': 'A bunch of people doing awesome stuff',
            'startsAt': new Date(),
            'capacity': 50,
            'owner': {
                '_id': '58493e0b691ecc0d3da51bfe',
                'firstName': 'Robert',
                'lastName': 'Rossmann',
                'email': 'robert.rossmann@strv.com',
                'createdAt': '2016-12-08T10:46:33.901Z',
                'updatedAt': '2016-12-08T10:46:33.901Z'
              },
              'attendees': [
                {
                  '_id': '58493e0b691ecc0d3da51bfe',
                  'firstName': 'Robert',
                  'lastName': 'Rossmann',
                  'email': 'robert.rossmann@strv.com',
                  'createdAt': '2016-12-08T10:46:33.901Z',
                  'updatedAt': '2016-12-08T10:46:33.901Z'
                }
              ],
              'createdAt': new Date(),
              'updatedAt': new Date(),
            }}
          redirectToEventDetail={mockFn}
          attentEvent={mockFn}
          leaveEvent={mockFn}
          editEvent={mockFn}
        />
      </Provider>
    );
  });

  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should have a 0 divs', () => {
    expect(wrapper.find('div')).toHaveLength(1);
  });
  it('should have 1 a tag', () => {
    expect(wrapper.find('a')).toHaveLength(1);
  });
  it('should have a 1 span', () => {
    expect(wrapper.find('span')).toHaveLength(4);
  });
});
