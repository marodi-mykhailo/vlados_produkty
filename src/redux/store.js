import {applyMiddleware, combineReducers, createStore} from "redux";
import {productsReducer} from "./reducers/productsReducer";
import createSagaMiddleware from 'redux-saga'
import {watchProductLoadData} from "../saga/products.saga";

const sagaMiddleware = createSagaMiddleware()
const rootStore = combineReducers({
    products: productsReducer,
})

export const store = createStore(rootStore, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchProductLoadData);

window.store = store
