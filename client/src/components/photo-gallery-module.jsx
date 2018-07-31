import React from 'react';
import $ from 'jquery';
import ImageList from './image-list.jsx';
import MainImage from './main-image.jsx';
import ImageGalleryModal from './image-gallery-modal.jsx';

class PhotoGalleryModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: ['1.jpg', '2.jpg', '3.jpg'],
      index: 0,
      show: false,
      product_name: '',
      product_detail: '',
    };
  }

  componentDidMount() {
    this.getImageList();
    this.getProductInfo();
  }

  getImageList() {
    $.get(`${window.location.pathname}/images`, (data) => {
      this.setState({ images: data });
    });
  }

  getProductInfo() {
    $.get(`${window.location.pathname}/product_info`, (data) => {
      this.setState({ product_name: data.name, product_detail: data.detail });
    });
  }

  setIndex(idx) {
    this.setState({ index: idx });
  }

  showModal() {
    this.setState({ show: true });
  }

  hideModal() {
    this.setState({ show: false });
  }

  render() {
    const {
      images, index, show, product_name: productName, product_detail: productDetail,
    } = this.state;
    return (
      <div className="photo-gallery">
        <ImageList images={images} setIndex={idx => this.setIndex(idx)} />
        <MainImage image={images[index]} showModal={() => this.showModal()} />
        <ImageGalleryModal
          show={show}
          handleClose={() => this.hideModal()}
          images={images}
          image={images[index]}
          productName={productName}
          productDetail={productDetail}
        />
      </div>
    );
  }
}

export default PhotoGalleryModule;
