// Check node --version (terminal)
// Check npm ---version (terminal)
// Install npm install -g create-react-app (terminal)
// Create new React app whit create-react-app nameapp (terminal)
// cd nameapp and  typing  npm start (terminal)


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css';


var element = React.createElement('h1', { className: 'greeting' },
    'Без тени сомненья, без капли печали.!');


ReactDOM.render(element, document.getElementById('root'));
serviceWorker.unregister();