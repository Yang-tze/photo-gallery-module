import React from 'react';

const ImageGalleryModal = (props) => {
  const showHideClassName = props.show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <div className='modal-main'>
        <img className='modal-image' src={`https://s3-us-west-1.amazonaws.com/fec-photo-gallery-images/${props.image}`}></img>
        <p>Product Name</p>
        <p>Product Detail</p>
        <button onClick={() => props.handleClose()}>Close</button>
      </div>
    </div>
  )
}

export default ImageGalleryModal
