import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import MainImage from './components/main-image.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <MainImage/>
      </div>
    );
  }
}

export default App;

// ReactDOM.render(<App/>, document.getElementById('app'));
