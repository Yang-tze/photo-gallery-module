import React from 'react';
import PropTypes from 'prop-types';
import ModalImageList from './modal-image-list.jsx';

class ImageGalleryModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  setNode(node) {
    this.node = node;
  }

  handleClick(e) {
    if (this.node.contains(e.target)) {
      return;
    }
    const { handleClose } = this.props;
    handleClose();
  }

  render() {
    const {
      show, setImage, handleClose, images, image, productName, productDetail,
    } = this.props;
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
    return (
      <div className={showHideClassName} onClick={e => this.handleClick(e)} role="presentation">
        <div className="modal-main" ref={node => this.setNode(node)}>
          <button className="close-modal" onClick={() => handleClose()} type="button">
            x
          </button>
          <div className="align-right">
            <div className="modal-details">
              <p>
                {productName}
              </p>
              <p>
                {productDetail}
              </p>
              <ModalImageList images={images} setImage={img => setImage(img)} />
            </div>
          </div>
          <img className="modal-main-image" src={`https://s3-us-west-1.amazonaws.com/fec-photo-gallery-images/${image}`} alt="" />
        </div>
      </div>
    );
  }
}

ImageGalleryModal.propTypes = {
  show: PropTypes.bool.isRequired,
  setImage: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired,
  image: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  productDetail: PropTypes.string.isRequired,
};

export default ImageGalleryModal;
