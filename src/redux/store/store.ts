import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import {authMiddleware} from "./middlewares/authMiddleware";


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, authMiddleware)));