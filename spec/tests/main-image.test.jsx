import React from 'react';
import { shallow } from 'enzyme';
import MainImage from '../../client/src/components/main-image';

//Testing Main Image Component
describe('Main Image', () => {

  it('renders correctly', async () => {
    expect(shallow(<MainImage/>).find('div.main-image').exists()).toBe(true);
  });

  it('renders an image', async () => {
    expect(shallow(<MainImage/>).find('img').exists()).toBe(true);
  });
});
