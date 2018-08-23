import { mount } from 'enzyme';
import * as React from 'react';
import store from '../../store-index';
import Login from '../../components/authentication/login/Login';

describe('--------Create CheckButton tests-------------', () => {
  let wrapper: any,
    mockFn: Function = jest.fn();
  beforeEach(() => {
    wrapper = mount(
      <Login
        store={store}
        handleEmail={mockFn}
        email={'bruce@strv.com'}
        password={'top secret'}
        handlePassword={mockFn}
        validateAuthorization={mockFn}
        showError={true}
      />
    );
  });

  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should have a 4 divs', () => {
    expect(wrapper.find('div')).toHaveLength(4);
  });
  it('should have a 2 labels', () => {
    expect(wrapper.find('label')).toHaveLength(2);
  });
  it('should have a 2 inout', () => {
    expect(wrapper.find('input')).toHaveLength(2);
  });
  it('should have a 1 button', () => {
    expect(wrapper.find('button')).toHaveLength(1);
  });
  it('should have a 1 h2', () => {
    expect(wrapper.find('h2')).toHaveLength(1);
  });
});
