import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import unregister from './registerServiceWorker';
import './initialize';

ReactDOM.render(<App />, document.getElementById('root'));
unregister();
