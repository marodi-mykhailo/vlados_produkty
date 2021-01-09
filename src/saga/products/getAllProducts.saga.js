import {call, delay, put, takeLatest} from "@redux-saga/core/effects";
import {setProducts} from "../../redux/reducers/productsReducer";
import {productAPI} from "../../api/api";
import {setAppStatus} from "../../redux/reducers/appReducer";

function* workerProductLoadData() {
    yield put(setAppStatus("loading", "Request is loading"))
    try {
        const productsData = yield call(productAPI.getAllProducts)
        yield put(setProducts(productsData.data))
        yield put(setAppStatus("successes", "Request is successes"))
        yield delay(3000)
        yield put(setAppStatus('idle', ''))
    } catch (e) {
        yield put(setAppStatus('failed', e.message))
        yield delay(3000)
        yield put(setAppStatus('idle', ''))
    }

}

export function* watchProductLoadData() {
    yield takeLatest("LOAD_PRODUCTS", workerProductLoadData)
}
