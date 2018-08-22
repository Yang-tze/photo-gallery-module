import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import PhotoGalleryModule from './components/photo-gallery-module.jsx';
ReactDOM.render(<PhotoGalleryModule/>, document.getElementById('photo-gallery'));


//export default PhotoGalleryModule 
//for server bundle

//make photoGalleryModule into window object in client bundle
//window.photogallerymodule = photogallerymodule
