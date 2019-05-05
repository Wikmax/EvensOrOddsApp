import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import "../scss/main.scss";
import Main from './components/Main.jsx';
import rootReducer from './reducers';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <Main/>
    </Provider>,document.getElementById('root'));