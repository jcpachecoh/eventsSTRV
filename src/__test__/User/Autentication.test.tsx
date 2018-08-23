import { shallow } from 'enzyme';
import * as React from 'react';
import { Authentication } from '../../components/authentication/Authentication';

describe('--------Create CheckButton tests-------------', () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallow(<Authentication />);
  });

  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1);
  });
});
