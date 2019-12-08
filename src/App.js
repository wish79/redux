import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {increment,decrement, login, isLogin} from './action';

function App() {
  const counter = useSelector( state => state.counter);
  const isLogin = useSelector( state => state.isLogin);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h2 >Counter {counter}</h2>
      <h2 > {isLogin ? <h3>Logged</h3> : ''}</h2>
      <button onClick={() => dispatch(increment(3))}> + </button>
      <button onClick={() => dispatch(decrement())}> - </button>
      <br/>
      
      <br/>
      <button onClick={() => dispatch(login())}> Login/Logout </button>
    </div>
  );
}

export default App;
