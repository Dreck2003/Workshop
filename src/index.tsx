import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import state from './redux/store/store';
import 'bootstrap/dist/css/bootstrap.min.css';



ReactDOM.render(
    <Provider store={state}>
        <App />
    </Provider>,
    document.getElementById('root')
 )

