import React, {useEffect} from 'react';
import ProductTableContainer from "../Components/ProductTable";
import {useDispatch} from "react-redux";
import {loadProducts} from "../redux/reducers/productsReducer";

const Products = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadProducts())
    }, [])
    return (
        <ProductTableContainer/>
    );
};

export default Products;
