import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducers from '../src/reducers/reducer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware  } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../src/sagas/saga';
import 'bootstrap/dist/css/bootstrap.min.css';

const sagaMiddleware = createSagaMiddleware();

let store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

