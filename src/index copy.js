import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import allReducers from './reducer';
import {combineReucers} from 'redux';
import {Provider} from 'react-redux';

//Action

const increment = (nr) => {
  return { type : 'INCREMENT',
            payload : nr}
}

const decrement = () => {
    return { type : 'DECREMENT'}
  }

  const login = () => {
    return { type : 'LOGIN'}
  }

  const isLogin = () => {
    return { type : 'IS_LOGIN'}
  }

  

//Reducer


//Store

let myStore = createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//store.subscribe(() => console.log(store.getState()));

//Dispatch
myStore.dispatch(increment(1));
myStore.dispatch(increment(1));
myStore.dispatch(decrement());
myStore.dispatch(isLogin());
// myStore.dispatch(login());
myStore.dispatch(isLogin());

ReactDOM.render(
  <Provider store={myStore}>
  <App />
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
