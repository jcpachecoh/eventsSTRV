import { mount } from 'enzyme';
import store from '../../store-index';
import CheckButton from '../../components/CheckButton';
import * as React from 'react';

describe('--------Create CheckButton tests-------------', () => {
  let wrapper: any,
    mockFn: Function = jest.fn();
  beforeEach(() => {
    wrapper = mount(<CheckButton store={store} redirectToEventList={mockFn} />);
  });

  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1);
  });
});
