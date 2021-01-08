import {call, put, takeEvery} from "@redux-saga/core/effects";
import {productAPI} from "../api/api";
import {setProducts} from "../redux/reducers/productsReducer";

function* workerProductLoadData() {
    const productsData = yield call(productAPI.getAllProducts)
    yield put(setProducts(productsData.data))
}

export function* watchProductLoadData() {
    yield takeEvery("LOAD_PRODUCTS", workerProductLoadData)
}
