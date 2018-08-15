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
      image: '1.jpg',
      index: 0,
      show: false,
      product_name: 'SanDisk Cruzer CZ36 64GB USB 2.0 Flash Drive, Frustration-Free Packaging- SDCZ36-064G-AFFP',
      product_detail: '64GB',
    };
  }

  componentDidMount() {
    // this.getImageList();
    this.getProductInfo();
  }

  // getImageList() {
  //   $.get(`/images${window.location.pathname}/images`, (data) => {
  //   // $.get(`http://ec2-54-153-53-170.us-west-1.compute.amazonaws.com${window.location.pathname}/images`, (data) => {
  //     this.setState({ images: data });
  //   });
  // }

  getProductInfo() {
    $.get(`/images${window.location.pathname}/product_info`, (data) => {
    // $.get(`http://ec2-54-153-53-170.us-west-1.compute.amazonaws.com${window.location.pathname}/product_info`, (data) => {
      this.setState({ product_name: data.name, product_detail: data.details, images: data.images });
    });
  }

  setIndex(idx) {
    this.setState({ index: idx });
  }

  setImage(img) {
    this.setState({ image: img });
  }

  showModal() {
    const { images, index } = this.state;
    this.setState({ show: true });
    this.setImage(images[index]);
  }

  hideModal() {
    this.setState({ show: false });
  }

  render() {
    const {
      images, image, index, show, product_name: productName, product_detail: productDetail,
    } = this.state;
    return (
      <div className="photo-gallery">
        <ImageList images={images} setIndex={idx => this.setIndex(idx)} />
        <MainImage image={images[index]} showModal={() => this.showModal()} />
        <ImageGalleryModal
          show={show}
          images={images}
          image={image}
          productName={productName}
          productDetail={productDetail}
          handleClose={() => this.hideModal()}
          setImage={img => this.setImage(img)}
        />
      </div>
    );
  }
}

export default PhotoGalleryModule;
