import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MovieMain from './MovieMain';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<MovieMain />, document.getElementById('root'));
serviceWorker.unregister();
