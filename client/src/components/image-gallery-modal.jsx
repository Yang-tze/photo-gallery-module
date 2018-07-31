import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryModal = ({
  show, handleClose, image, productName, productDetail,
}) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <div className="modal-main">
        <img className="modal-image" src={`https://s3-us-west-1.amazonaws.com/fec-photo-gallery-images/${image}`} alt="" />
        <p>
          {productName}
        </p>
        <p>
          {productDetail}
        </p>
        <button onClick={() => handleClose()} type="button">
          Close
        </button>
      </div>
    </div>
  );
};

ImageGalleryModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  productDetail: PropTypes.string.isRequired,
};

export default ImageGalleryModal;
