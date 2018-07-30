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
      show: false
    }
  }

  componentDidMount() {
    this.getImageList();
  }

  getImageList() {
    $.get(`/${1}/images`, (data) => {
      console.log(data);
      // this.setState({images: data, image: data[0]});
    });
  }

  setImage(img) {
    console.log(img);
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
          handleClose={this.hideModal}
          images={this.state.images}
          image={this.state.image}
        />
      </div>
    );
  }
}

export default PhotoGalleryModule;
