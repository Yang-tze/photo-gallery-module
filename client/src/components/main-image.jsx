import React from 'react';
import PropTypes from 'prop-types';

const MainImage = ({ image, showModal }) => (
  <div className="main-image" onClick={() => showModal(image)} role="presentation">
    <img className="image" src={`https://s3-us-west-1.amazonaws.com/fec-photo-gallery-images/${image}`} alt="" />
  </div>
);

MainImage.propTypes = {
  image: PropTypes.string.isRequired,
  showModal: PropTypes.func.isRequired,
};

export default MainImage;
