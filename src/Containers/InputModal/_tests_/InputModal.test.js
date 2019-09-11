import React from 'react';
import { shallow } from 'enzyme';

import { InputModal } from '../';

describe('InputModal', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<InputModal />);

    expect(wrapper).toMatchSnapshot();
  });
});