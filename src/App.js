import React from 'react';
import { Provider } from 'react-redux';

import createStore from './store/store';
import Router from './routes/router';

import './App.css';
import 'whatwg-fetch';

const store = createStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
