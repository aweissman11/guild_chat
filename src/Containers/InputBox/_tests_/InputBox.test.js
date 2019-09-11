import React from 'react';
import { shallow } from 'enzyme';

import { InputBox } from '../';

describe('InputBox', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<InputBox />);

    expect(wrapper).toMatchSnapshot();
  });
});