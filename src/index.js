import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store from './redux/store/index';

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);


ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
