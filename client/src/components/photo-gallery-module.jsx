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
      product_detail: ''
    }
  }

  componentDidMount() {
    this.getImageList();
    this.getProductInfo();
  }

  getImageList() {
    $.get(`${window.location.pathname}/images`, (data) => {
      this.setState({images: data, image: data[0]});
    });
  }

  getProductInfo() {
    $.get(`${window.location.pathname}/product_info`, (data) => {
      this.setState({product_name: data['name'], product_detail: data['detail']});
    })
  }

  setImage(img) {
    this.setState({image: img});
  }

  showModal() {
    this.setState({show: true});
  }

  hideModal() {
    this.setState({show: false});
  }

  render() {
    return (
      <div className='photo-gallery'>
        <ImageList images={this.state.images} setImage={this.setImage.bind(this)}/>
        <MainImage image={this.state.image} showModal={this.showModal.bind(this)}/>
        <ImageGalleryModal
          show={this.state.show}
          handleClose={this.hideModal.bind(this)}
          images={this.state.images}
          image={this.state.image}
          product_name={this.state.product_name}
          product_detail={this.state.product_detail}
        />
      </div>
    );
  }
}

export default PhotoGalleryModule;
