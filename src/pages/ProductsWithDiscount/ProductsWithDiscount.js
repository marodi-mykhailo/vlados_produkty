import React, {useEffect} from 'react';
import {Input} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {loadProductsWithDiscount, setProducts} from "../../redux/reducers/productsReducer";
import ProductTableContainer from "../../Components/ProductTable";
import AppStatusBox from "../../Components/AppStatusBox/AppStatusBox";
import styles from './ProductsWithDiscount.module.css'
import AppStatusText from "../../Components/AppStatusText/AppStatusText";
import {setAppStatus} from "../../redux/reducers/appReducer";

const {Search} = Input;
const ProductsWithDiscount = () => {
    const appStatus = useSelector(state => state.app.appStatus)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setProducts([]))
        dispatch(setAppStatus('idle', ''))
    }, [])

    const onSearch = (value) => {
        dispatch(loadProductsWithDiscount(value))
    }

    if (appStatus === 'loading') {
        return (
            <div>
                <div className={styles.searchWrapper}>
                    <Search placeholder="input search text"
                            className={styles.search}
                            onSearch={onSearch}
                            enterButton="Search"
                            size="large"
                    />
                </div>
                <AppStatusBox/>
            </div>
        )
    }

    return (
        <div>
            <div className={styles.searchWrapper}>
                <Search placeholder="input search text"
                        className={styles.search}
                        onSearch={onSearch}
                        enterButton="Search"
                        size="large"
                />
            </div>

            <ProductTableContainer/>
            {appStatus != "idle" &&  <AppStatusText/>}
        </div>
    );
};

export default ProductsWithDiscount;
