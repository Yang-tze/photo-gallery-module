import React from 'react';
import ImageThumbnail from './image-thumbnail.jsx';

const ImageList = (props) => (
  <div className='image-list'>
    {props.images.map(thumbnail => {
      return <ImageThumbnail key={thumbnail} imageThumbnail={thumbnail} setImage={props.setImage.bind(this)}/>;
    })}
  </div>
)

export default ImageList;
