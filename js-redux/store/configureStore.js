import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './modules';
import { composeWithDevTools } from 'redux-devtools-extension';

const logger = (store) => (next) => (action) => {
  console.log('redux logger => ', action);
  next(action);
};

const enhancer =
  process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(logger, thunk))
    : composeWithDevTools(applyMiddleware(logger, thunk));

const store = createStore(rootReducer, enhancer);

export default store;
