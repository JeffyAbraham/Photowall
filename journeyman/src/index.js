import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import './styles/style.css'
import {BrowserRouter} from 'react-router-dom'
import{createStore,applyMiddleware} from 'redux'
import rootReducer from './redux/reducer'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import App from './components/App'
import {database} from './database/config'

const store=createStore(rootReducer,applyMiddleware(thunk))

console.log(rootReducer)
ReactDOM.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

