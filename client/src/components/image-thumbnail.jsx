import React from 'react';
import PropTypes from 'prop-types';

const ImageThumbnail = ({ imageThumbnail, setImage }) => (
  <div className="image-thumbnail" onMouseEnter={() => setImage(imageThumbnail)}>
    <img className="thumbnail" src={`https://s3-us-west-1.amazonaws.com/fec-photo-gallery-images/${imageThumbnail}`} alt="" />
  </div>
);

ImageThumbnail.propTypes = {
  imageThumbnail: PropTypes.string.isRequired,
  setImage: PropTypes.func.isRequired,
};

export default ImageThumbnail;
