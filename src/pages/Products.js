import React, {useEffect} from 'react';
import ProductTableContainer from "../Components/ProductTable";
import {useDispatch, useSelector} from "react-redux";
import {loadProducts} from "../redux/reducers/productsReducer";
import AppStatusBox from "../Components/AppStatusBox/AppStatusBox";
import AppStatusText from "../Components/AppStatusText/AppStatusText";

const Products = () => {
    const dispatch = useDispatch()
    const appStatus = useSelector(state => state.app.appStatus)
    useEffect(() => {
        dispatch(loadProducts())
    }, [])

    if (appStatus === 'loading') {
        return <AppStatusBox/>
    }

    return (
        <div>
            <ProductTableContainer/>
            {appStatus != "idle" &&  <AppStatusText/>}
        </div>
    );
};

export default Products;
