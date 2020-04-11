import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

import App from './src/App'; // tutorial.jsx import

const Hot = hot(App);

ReactDOM.render(<Hot />, document.getElementById('root'));
