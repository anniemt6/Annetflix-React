import { createStore } from 'redux';
import { rootReducer } from './reducers/comdineReducers';
import { applyMiddlewares } from './middlewares/applyMiddleware';


export const store = createStore(rootReducer, applyMiddlewares);