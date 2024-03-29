import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Calender from './Components/Calender';
import store from './store/store';
function App() {
  return (
    <div className="App">
      <Provider store = {store}>
      <Calender/>
      </Provider>
     
    </div>
  );
}

export default App;
