import React from 'react';
import { shallow } from 'enzyme';
import PhotoGalleryModule from '../../client/src/components/photo-gallery-module';
import MainImage from '../../client/src/components/main-image';
import ImageList from '../../client/src/components/image-list';

//Testing Main Photo Gallery Component
describe('Photo Gallery', () => {

  it('renders correctly', () => {
    expect(shallow(<PhotoGalleryModule/>).find('div.photo-gallery').exists()).toBe(true);
  });

  it('renders an image list', () => {
    expect(shallow(<PhotoGalleryModule/>).find(ImageList).exists()).toBe(true);
  });

  it('renders a main image', () => {
    expect(shallow(<PhotoGalleryModule/>).find(MainImage).exists()).toBe(true);
  });

});
