import { mount } from 'enzyme';
import * as React from 'react';
import store from '../../store-index';
import Signup from '../../components/authentication/login/Signup';

describe('--------Create Signup tests-------------', () => {
  let wrapper: any,
    mockFn: Function = jest.fn();
  beforeEach(() => {
    wrapper = mount(
      <Signup
        store={store}
        email={'bruce@strv.com'}
        password={'top secret'}
        firstName={'Bruce'}
        lastName={'Banner'}
        handleFirstName={mockFn}
        handleLastName={mockFn}
        handleEmail={mockFn}
        handlePassword={mockFn}
        handlePasswordRepeat={mockFn}
        submitSignUp={mockFn}
        redirectToLogin={mockFn}
        showError={true}
      />
    );
  });

  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should have a 13 divs', () => {
    expect(wrapper.find('div')).toHaveLength(13);
  });
  it('should have a 2 labels', () => {
    expect(wrapper.find('label')).toHaveLength(5);
  });
  it('should have a 2 inout', () => {
    expect(wrapper.find('input')).toHaveLength(5);
  });
  it('should have a 1 button', () => {
    expect(wrapper.find('button')).toHaveLength(1);
  });
  it('should have a 1 h2', () => {
    expect(wrapper.find('h2')).toHaveLength(1);
  });
  it('should have a 1 span', () => {
    expect(wrapper.find('span')).toHaveLength(2);
  });
  it('should have a 1 a', () => {
    expect(wrapper.find('a')).toHaveLength(1);
  });
});
