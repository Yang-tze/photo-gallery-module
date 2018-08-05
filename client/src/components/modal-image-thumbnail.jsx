import React from 'react';
import PropTypes from 'prop-types';

const ModalImageThumbnail = ({ imageThumbnail, setImage }) => {
  // const selectedClassName = selected ? 'image-thumbnail' : 'image-thumbnail selected';
  return (
    <div className="modal-image-thumbnail" onClick={() => setImage(imageThumbnail)} role="presentation">
      <img className="thumbnail" src={`https://s3-us-west-1.amazonaws.com/fec-photo-gallery-images/${imageThumbnail}`} alt="" />
    </div>
  );
};

ModalImageThumbnail.propTypes = {
  imageThumbnail: PropTypes.string.isRequired,
  setImage: PropTypes.func.isRequired,
  // selected: PropTypes.bool.isRequired,
};

export default ModalImageThumbnail;
