import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { nodes, connections } from './my-map.json';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App nodes={nodes} connections={connections} />, document.getElementById('root'));
registerServiceWorker();
