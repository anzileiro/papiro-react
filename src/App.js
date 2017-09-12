import React, { Component } from 'react';
import { render } from 'react-dom';
import MindMap from 'react-mindmap';
import { nodes, connections } from './my-map.json';
 
class App extends Component {
  render() {
    return (
      <MindMap
        nodes={this.props.nodes}
        connections={this.props.connections}
      />
    );
  }
}
 
// render(
//   <Example nodes={nodes} connections={connections} />,
//   document.getElementById('target')
// );

export default App;


// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
