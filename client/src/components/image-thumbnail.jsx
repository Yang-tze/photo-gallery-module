import React from 'react';

const ImageThumbnail = (props) => (
  <div className='image-thumbnail'>
    <img className='thumbnail' src={`https://s3-us-west-1.amazonaws.com/fec-photo-gallery-images/${props.imageThumbnail}`} onMouseEnter={() => props.setImage(props.imageThumbnail)}></img>
  </div>
)

export default ImageThumbnail;
