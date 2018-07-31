import React from 'react';
import PropTypes from 'prop-types';

const ImageThumbnail = ({ imageThumbnail, index, setIndex }) => {
  // const selectedClassName = selected ? 'image-thumbnail' : 'image-thumbnail selected';
  return (
    <div className="image-thumbnail" onMouseEnter={() => setIndex(index)}>
      <img className="thumbnail" src={`https://s3-us-west-1.amazonaws.com/fec-photo-gallery-images/${imageThumbnail}`} alt="" />
    </div>
  );
};

ImageThumbnail.propTypes = {
  imageThumbnail: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  setIndex: PropTypes.func.isRequired,
  // selected: PropTypes.bool.isRequired,
};

export default ImageThumbnail;
