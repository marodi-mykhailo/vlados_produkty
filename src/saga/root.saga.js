import {all} from "@redux-saga/core/effects";
import {watchProductLoadData} from "./products/getAllProducts.saga";
import {watchProductWithDiscountLoadData} from "./products/getProductsWithDiscount.saga";

export default function* rootSaga() {
    yield all([
        watchProductLoadData(),
        watchProductWithDiscountLoadData()
    ])
}
