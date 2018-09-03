import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import Navigation from './router/navigation';
import './style.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navigation/>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.querySelector(".container-fluid"));