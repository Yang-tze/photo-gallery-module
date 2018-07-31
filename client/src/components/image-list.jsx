import React from 'react';
import PropTypes from 'prop-types';
import ImageThumbnail from './image-thumbnail.jsx';


const ImageList = ({ images, setImage }) => (
  <div className="image-list">
    {images.map(thumbnail => (
      <ImageThumbnail
        key={thumbnail}
        imageThumbnail={thumbnail}
        setImage={img => setImage(img)}
      />
    ))}
  </div>
);

ImageList.propTypes = {
  images: PropTypes.array.isRequired,
  setImage: PropTypes.func.isRequired,
};


export default ImageList;
