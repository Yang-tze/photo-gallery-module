import React from 'react';
import PropTypes from 'prop-types';
import ModalImageThumbnail from './modal-image-thumbnail.jsx';

const ModalImageList = ({ images, setImage }) => (
  <div className="modal-image-list">
    {images.map((thumbnail => (
      <ModalImageThumbnail
        key={thumbnail}
        imageThumbnail={thumbnail}
        setImage={img => setImage(img)}
      />
    )))}
  </div>
);

ModalImageList.propTypes = {
  images: PropTypes.array.isRequired,
  setImage: PropTypes.func.isRequired,
};

export default ModalImageList;
