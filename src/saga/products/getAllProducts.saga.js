import {call, put, takeLatest} from "@redux-saga/core/effects";
import {setProducts} from "../../redux/reducers/productsReducer";
import {productAPI} from "../../api/api";

function* workerProductLoadData() {
        const productsData = yield call(productAPI.getAllProducts)
        yield put(setProducts(productsData.data))
}

export function* watchProductLoadData() {
    yield takeLatest("LOAD_PRODUCTS", workerProductLoadData)
}
