import { shallow } from 'enzyme';
import * as React from 'react';
import { Logo } from '../../components/logo';

describe('--------Create CheckButton tests-------------', () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallow(<Logo />);
  });

  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1);
  });
});
