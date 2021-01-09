import React, {useEffect} from 'react';
import {Input} from 'antd';
import {useDispatch} from "react-redux";
import {loadProductsWithDiscount} from "../redux/reducers/productsReducer";
import ProductTableContainer from "../Components/ProductTable";

const {Search} = Input;
const ProductsWithDiscount = () => {
    const dispatch = useDispatch()

    const onSearch = (value) => {
        dispatch(loadProductsWithDiscount(value))
    }

    return (
        <div>
            <Search placeholder="input search text"
                    onSearch={onSearch}
                    enterButton="Search"
                    size="large"
            />

            <ProductTableContainer/>
        </div>
    );
};

export default ProductsWithDiscount;
