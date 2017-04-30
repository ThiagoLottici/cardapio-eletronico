import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
  var config = {
    apiKey: "AIzaSyCOg8-ZX-mleP4locqgBhzisWG_y7lu9I8",
    authDomain: "cardapioeletronico-706f6.firebaseapp.com",
    databaseURL: "https://cardapioeletronico-706f6.firebaseio.com",
    projectId: "cardapioeletronico-706f6",
    storageBucket: "cardapioeletronico-706f6.appspot.com",
    messagingSenderId: "283723073115"
  };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
