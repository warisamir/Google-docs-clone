import React, { Component } from 'react';

import Topbar from '../Topbar';
import Editor from '../Editor';

class App extends Component {
  render() {
    return (
      <div>
        <Topbar />
        <Editor />
      </div>
    );
  }
}


export default App;
