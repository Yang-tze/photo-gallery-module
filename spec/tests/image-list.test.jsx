import React from 'react';
import { shallow } from 'enzyme';
import ImageList from '../../client/src/components/image-list';

//Testing Image List Component
describe('Image List', () => {

  it('renders correctly', async () => {
    expect(shallow(<ImageList/>).find('div.image-list').exists()).toBe(true);
  });
});
