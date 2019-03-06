import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';


//Reducers is a master state that produces the state of the entire application
function reducer(state, action) {
    console.log(action);
    return 'State';
}
const store = createStore(reducer);


const action = {
    type: 'changeState',
    payload: {
        newState: 'New state'
    }
}

store.dispatch(action);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
