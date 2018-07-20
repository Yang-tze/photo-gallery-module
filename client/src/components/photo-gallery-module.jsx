import React from 'react';
import $ from 'jquery';
import ImageList from './image-list.jsx';
import MainImage from './main-image.jsx';

class PhotoGalleryModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className='photo-gallery'>
        <ImageList/>
        <MainImage/>
      </div>
    );
  }
}

export default PhotoGalleryModule;
