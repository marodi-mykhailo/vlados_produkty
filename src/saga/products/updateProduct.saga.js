import {call, delay, put, takeLatest} from "@redux-saga/core/effects";
import {setAppStatus} from "../../redux/reducers/appReducer";
import {productAPI} from "../../api/api";
import {updateProduct} from "../../redux/reducers/productsReducer";


function* workerUpdateProduct(action) {
    yield put(setAppStatus("loading", "Request is loading"))
    try {
        const productsData = yield call(productAPI.updateProduct, action.id, action.productData)
        yield put(updateProduct(action.id, productsData.data))
        yield put(setAppStatus("successes", "Request is successes"))
        yield delay(3000)
        yield put(setAppStatus('idle', ''))
    } catch (e) {
        yield put(setAppStatus('failed', e.message))
        yield delay(3000)
        yield put(setAppStatus('idle', ''))
    }

}

export function* watchUpdateProduct() {
    yield takeLatest("UPDATE_PRODUCT", workerUpdateProduct)
}
