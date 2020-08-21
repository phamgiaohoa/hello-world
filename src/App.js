import React from 'react';
import MainContainer from './router/MainContainer.js';
import rootReducer from './redux/reducers/rootReducer';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';


const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk, createLogger()),
);

// const appId = '9b004469-7ea6-49df-a793-ebbc997e2758';

const App = () => {


  return (
    <Provider store={store}>
      <MainContainer />
    </Provider>
  );
};

export default App;
