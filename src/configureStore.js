import {createStore, applyMiddleware} from 'redux';
import promiseMidddlware from 'redux-promise'
import createLogger from 'redux-logger'
import todoApp from './reducers';


const configureStore = ()=> {
  const middlewares = [promiseMidddlware];

  if(process.env.NODE_ENV !== 'production'){
    middlewares.push(createLogger);
  }

  return createStore(
    todoApp,
    applyMiddleware(...middlewares))
}

export default configureStore;
