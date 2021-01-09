import React, {useEffect, useState} from 'react'
import {Layout, Menu, Breadcrumb} from 'antd';
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
import ProductsWithDiscount from "./pages/ProductsWithDiscount";
import Products from "./pages/Products";

const {Header, Content, Footer, Sider} = Layout;
const {SubMenu} = Menu;

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(loadProducts())
    }, [])

    const [collapsed, setCollapsed] = useState(false)
    const onCollapse = collapsed => {
        console.log(collapsed);
        setCollapsed(!!collapsed)
    };

    return (
        <Layout style={{minHeight: '100vh'}}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo"/>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<PieChartOutlined/>}>
                        <NavLink to={'/produkty'}>Produkty</NavLink>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined/>}>
                        <NavLink to={'/produkty-with-discount'}>Find</NavLink>
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<UserOutlined/>} title="User">
                        <Menu.Item key="3">Tom</Menu.Item>
                        <Menu.Item key="4">Bill</Menu.Item>
                        <Menu.Item key="5">Alex</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<TeamOutlined/>} title="Team">
                        <Menu.Item key="6">Team 1</Menu.Item>
                        <Menu.Item key="8">Team 2</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9" icon={<FileOutlined/>}>
                        Files
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{padding: 0}}/>
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
