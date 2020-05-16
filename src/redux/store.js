import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './index';

const logger = store => next => action => {
    console.log("DISPATCHING ACTION\n", action);
    const result = next(action);
    console.log("NEXT STATE\n", store.getState());
    return result;
}; 


export default applyMiddleware(thunk, logger)(createStore)(rootReducer);