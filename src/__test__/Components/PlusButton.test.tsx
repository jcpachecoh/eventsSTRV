import { mount } from 'enzyme';
import store from '../../store-index';
import * as React from 'react';
import PlusButton from '../../components/PlusButton';

describe('--------Create CheckButton tests-------------', () => {
  let wrapper: any,
    mockFn: Function = jest.fn();
  beforeEach(() => {
    wrapper = mount(<PlusButton store={store} redirectToAddEvent={mockFn} />);
  });

  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1);
  });
});
