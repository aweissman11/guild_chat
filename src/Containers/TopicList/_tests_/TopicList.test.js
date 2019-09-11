import React from 'react';
import { shallow } from 'enzyme';

import { TopicList } from '../';

describe('TopicList', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<TopicList />);

    expect(wrapper).toMatchSnapshot();
  });
});