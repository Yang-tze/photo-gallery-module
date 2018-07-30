import React from 'react';

const MainImage = (props) => (
  <div className='main-image'>
    <img className='image' src={`https://s3-us-west-1.amazonaws.com/fec-photo-gallery-images/${props.image}`} onClick={() => props.showModal()}></img>
  </div>
)

export default MainImage;
