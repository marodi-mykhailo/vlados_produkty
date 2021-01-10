import React, {useEffect, useState} from 'react'
import {Layout, Menu, Breadcrumb, Button, Modal} from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import ProductTable from "./Components/ProductTable";
import {useDispatch} from "react-redux";
import {loadProducts} from "./redux/reducers/productsReducer";
import ProductTableContainer from "./Components/ProductTable";
import {NavLink, Route, Switch} from "react-router-dom";
import ProductsWithDiscount from "./pages/ProductsWithDiscount/ProductsWithDiscount";
import Products from "./pages/Products";
import './App.css'
import TableOutlined from "@ant-design/icons/lib/icons/TableOutlined";
import SearchOutlined from "@ant-design/icons/lib/icons/SearchOutlined";
import ProductForm from "./Components/ProductForm/ProductForm";
import {setAppStatus} from "./redux/reducers/appReducer";

const {Header, Content, Footer, Sider} = Layout;

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
    }, [])

    const [collapsed, setCollapsed] = useState(false)
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onCollapse = collapsed => {
        console.log(collapsed);
        setCollapsed(!!collapsed)
    };

    const onActivePageChanges = (num) => {
        localStorage.setItem('currentPage', num)
    }

    return (
        <Layout style={{minHeight: '100vh'}}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo">
                    <h1 className="logo___text">Produkty & Usługi</h1>
                </div>
                <Menu theme="dark" defaultSelectedKeys={localStorage.getItem('currentPage')} mode="inline">
                    <Menu.Item key="1" onClick={() => onActivePageChanges('1')} icon={<TableOutlined/>}>
                        <NavLink to={'/produkty'}>Produkty</NavLink>
                    </Menu.Item>
                    <Menu.Item key="2" onClick={() => onActivePageChanges('2')} icon={<SearchOutlined/>}>
                        <NavLink to={'/produkty-with-discount'}>Find</NavLink>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{padding: 0}}>
                    <div className={"create__btn__box"}>
                        <Button className={"create__btn"} onClick={showModal} type="primary" size={"large"}>
                            Create Product
                        </Button>
                        <Modal title="Create Product"
                               visible={isModalVisible}
                               onCancel={handleCancel}
                               footer={[]}>
                           <ProductForm setIsModalVisible={setIsModalVisible}/>
                        </Modal>
                    </div>
                </Header>
                <Content style={{margin: '0 16px'}}>

                    <Switch>
                        <Route exact path={'/produkty'} render={() => <Products/>}/>
                        <Route exact path={'/produkty-with-discount'} render={() => <ProductsWithDiscount/>}/>
                    </Switch>


                </Content>
                <Footer style={{textAlign: 'center'}}>Wlados Design ©2021 Created by Władysław Kurczenko</Footer>
            </Layout>
        </Layout>
    );
}

export default App;
