import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouted from './App';

import {store} from './redux/store/index';
import {Provider} from 'react-redux';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<Provider store={store}>
    <AppRouted />
</Provider>, document.getElementById('root'));
registerServiceWorker();
