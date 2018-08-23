import { mount } from 'enzyme';
import store from '../../store-index';
import * as React from 'react';
import CloseButton from '../../components/CloseButton';

describe('--------Create CheckButton tests-------------', () => {
  let wrapper: any,
    mockFn: Function = jest.fn();
  beforeEach(() => {
    wrapper = mount(<CloseButton store={store} redirectToEventList={mockFn} />);
  });

  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1);
  });
});
