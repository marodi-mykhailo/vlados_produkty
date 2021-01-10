import {all} from "@redux-saga/core/effects";
import {watchProductLoadData} from "./products/getAllProducts.saga";
import {watchProductWithDiscountLoadData} from "./products/getProductsWithDiscount.saga";
import {watchCreateProduct} from "./products/createProduct.saga";
import {watchUpdateProduct} from "./products/updateProduct.saga";
import {watchDeleteProduct} from "./products/deleteProduct.saga";

export default function* rootSaga() {
    yield all([
        watchProductLoadData(),
        watchProductWithDiscountLoadData(),
        watchCreateProduct(),
        watchUpdateProduct(),
        watchDeleteProduct()
    ])
}
