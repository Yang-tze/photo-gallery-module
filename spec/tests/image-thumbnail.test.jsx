import React from 'react';
import { shallow } from 'enzyme';
import ImageThumbnail from '../../client/src/components/image-thumbnail';

//Testing Image Thumbnail Component
describe('Image Thumbnail', () => {

  it('renders correctly', () => {
    expect(shallow(<ImageThumbnail/>).find('div.image-thumbnail').exists()).toBe(true);
  });

});
