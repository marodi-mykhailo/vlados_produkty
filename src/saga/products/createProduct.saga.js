import {call, delay, put, takeLatest} from "@redux-saga/core/effects";
import {setAppStatus} from "../../redux/reducers/appReducer";
import {productAPI} from "../../api/api";
import {setCreatedProduct} from "../../redux/reducers/productsReducer";


function* workerCreateProduct(action) {
    yield put(setAppStatus("loading", "Request is loading"))
    try {
        const productsData = yield call(productAPI.createProduct, action.productData)
        const updatedProduct = {
            nazwa: productsData.data.nazwa,
            produkt_id: productsData.data.id,
            jednostka_miary: productsData.data.jednostka_miary,
            "cena_netto": productsData.data.cena_netto,
            typ: productsData.data.typ,
            stawka: productsData.data.vat_id == '1' ? "8" : "23"
        }
        yield put(setCreatedProduct(updatedProduct))
        yield put(setAppStatus("successes", "Request is successes", "successes"))
        yield delay(3000)
        yield put(setAppStatus('idle', '',))
    } catch (e) {
        yield put(setAppStatus('failed', e.message, 'failed'))
        yield delay(3000)
        yield put(setAppStatus('idle', ''))
    }

}

export function* watchCreateProduct() {
    yield takeLatest("CREATE_PRODUCT", workerCreateProduct)
}
