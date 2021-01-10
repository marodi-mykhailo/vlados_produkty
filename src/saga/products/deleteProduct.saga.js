import {call, delay, put, takeLatest} from "@redux-saga/core/effects";
import {setAppStatus} from "../../redux/reducers/appReducer";
import {productAPI} from "../../api/api";
import {deleteProduct, updateProduct} from "../../redux/reducers/productsReducer";


function* workerDeleteProduct(action) {
    yield put(setAppStatus("loading", "Request is loading"))
    try {
        yield call(productAPI.deleteProductById, action.id)
        yield put(deleteProduct(action.id))
        yield put(setAppStatus("successes", "Request is successes"))
        yield delay(3000)
        yield put(setAppStatus('idle', ''))
    } catch (e) {
        yield put(setAppStatus('failed', e.message))
        yield delay(3000)
        yield put(setAppStatus('idle', ''))
    }

}

export function* watchDeleteProduct() {
    yield takeLatest("UPDATE_PRODUCT", workerDeleteProduct)
}
