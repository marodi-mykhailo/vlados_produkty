import {call, delay, put, takeLatest} from "@redux-saga/core/effects";
import {productAPI} from "../../api/api";
import {setProducts} from "../../redux/reducers/productsReducer";
import {setAppStatus} from "../../redux/reducers/appReducer";

function* workerProductWithDiscountLoadData(action) {
    yield put(setAppStatus("loading", "Request is loading"))
    try {
        const productsData = yield call(productAPI.getProductsWithNipDiscount, action.nip)
        yield put(setProducts(productsData.data.data))
        yield put(setAppStatus("successes", "Request is successes"))
        yield delay(3000)
        yield put(setAppStatus('idle', ''))
    } catch (e) {
        yield put(setAppStatus('failed', e.message))
        yield delay(3000)
        yield put(setAppStatus('idle', ''))
    }

}

export function* watchProductWithDiscountLoadData() {
    yield takeLatest("LOAD_PRODUCTS_WITH_DISCOUNT", workerProductWithDiscountLoadData)
}
