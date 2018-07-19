import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    }
  }

  getImages() {
    $.get('/images', (data) => {
      this.setState({images: data});
    });
  }

  render() {
    return (
      <div>
        <img src={`https://s3-us-west-1.amazonaws.com/fec-photo-gallery-images/${this.state.images[0]}`}></img>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
