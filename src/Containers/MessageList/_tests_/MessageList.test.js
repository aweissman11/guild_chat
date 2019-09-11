import React from 'react';
import { shallow } from 'enzyme';

import { MessageList } from '../';

describe('MessageList', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<MessageList messages={[]} />);

    expect(wrapper).toMatchSnapshot();
  });
});