import { mount } from 'enzyme';
import * as React from 'react';
import store from '../../store-index';
import { Provider } from 'react-redux';
import EventDetail from '../../components/events/EventDetails/EventDetail';
import { mockEvents } from '../../constants';

describe('--------Create EventDetail tests-------------', () => {
  let wrapper: any,
    mockFn: Function = jest.fn();
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <EventDetail
          store={store}
          event={mockEvents}
          getEventDetail={mockFn}
          loading={false}
        />
      </Provider>
    );
  });

  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should have a 9 divs', () => {
    expect(wrapper.find('div')).toHaveLength(9);
  });
  it('should have a 1 button', () => {
    expect(wrapper.find('button')).toHaveLength(2);
  });
});
