import React, { Component } from 'react';

import EditorTopbar from '../EditorTopbar';
import Editor from '../Editor';

class App extends Component {
  render() {
    return (
      <div>
        <EditorTopbar />
        <Editor documentId={this.props.match.params.id} />
      </div>
    );
  }
}


export default App;
