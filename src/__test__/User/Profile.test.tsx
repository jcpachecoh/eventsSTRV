import { mount } from 'enzyme';
import * as React from 'react';
import store from '../../store-index';
import Profile from '../../components/user/Profile/Profile';
import { mockEvents } from '../../constants/index';
import { Provider } from 'react-redux';

describe('--------Create Profile tests-------------', () => {
  let wrapper: any,
    mockFn: Function = jest.fn();
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <Profile events={mockEvents} getEventsProfile={mockFn} loading={false} />
      </Provider>
    );
  });

  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should have a 4 divs', () => {
    expect(wrapper.find('div')).toHaveLength(13);
  });
  it('should have a 1 button', () => {
    expect(wrapper.find('button')).toHaveLength(1);
  });
  it('should have a 1 span', () => {
    expect(wrapper.find('span')).toHaveLength(4);
  });
});
