import React from 'react';
import PropTypes from 'prop-types';
import ImageThumbnail from './image-thumbnail.jsx';


const ImageList = ({ images, setIndex }) => (
  <div className="image-list">
    {images.map(((thumbnail, index) => (
      <ImageThumbnail
        key={thumbnail}
        imageThumbnail={thumbnail}
        index={index}
        setIndex={idx => setIndex(idx)}
      />
    )))}
  </div>
);

ImageList.propTypes = {
  images: PropTypes.array.isRequired,
  setIndex: PropTypes.func.isRequired,
};


export default ImageList;
