import React from 'react';
import { shallow } from 'enzyme';

import ChatContainer from '../';

describe('ChatContainer', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<ChatContainer />);

    expect(wrapper).toMatchSnapshot();
  });
});