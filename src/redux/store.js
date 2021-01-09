import {applyMiddleware, combineReducers, createStore} from "redux";
import {productsReducer} from "./reducers/productsReducer";
import createSagaMiddleware from 'redux-saga'
import rootSaga, {watchProductLoadData} from "../saga/root.saga";
import {appReducer} from "./reducers/appReducer";

const sagaMiddleware = createSagaMiddleware()
const rootStore = combineReducers({
    products: productsReducer,
    app: appReducer
})

export const store = createStore(rootStore, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

window.store = store
