import React from 'react';
import $ from 'jquery';
import ImageList from './image-list.jsx';
import MainImage from './main-image.jsx';
import ImageGalleryModal from './image-gallery-modal.jsx';

class PhotoGalleryModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      image: '',
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
      this.setState({ images: data, image: data[0] });
    });
  }

  getProductInfo() {
    $.get(`${window.location.pathname}/product_info`, (data) => {
      this.setState({ product_name: data.name, product_detail: data.detail });
    });
  }

  setImage(img) {
    this.setState({ image: img });
  }

  showModal() {
    this.setState({ show: true });
  }

  hideModal() {
    this.setState({ show: false });
  }

  render() {
    const {
      images, image, show, product_name: productName, product_detail: productDetail,
    } = this.state;
    return (
      <div className="photo-gallery">
        <ImageList images={images} setImage={img => this.setImage(img)} />
        <MainImage image={image} showModal={() => this.showModal()} />
        <ImageGalleryModal
          show={show}
          handleClose={() => this.hideModal()}
          images={images}
          image={image}
          productName={productName}
          productDetail={productDetail}
        />
      </div>
    );
  }
}

export default PhotoGalleryModule;
