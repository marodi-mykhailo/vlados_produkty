import React from 'react';
import {Table, Input, Button, Space} from 'antd';
import Highlighter from 'react-highlight-words';
import {SearchOutlined} from '@ant-design/icons';
import {connect} from "react-redux";
import AppStatusBox from "./AppStatusBox/AppStatusBox";
import AdditionalTableButtons from "./AdditionalTableButtons/AdditionalTableButtons";

class ProductTable extends React.Component {
    state = {
        searchText: '',
        searchedColumn: '',
        isModalVisible: false
    };

    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}) => (
            <div style={{padding: 8}}>
                <Input
                    ref={node => {
                        this.searchInput = node;
                    }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{width: 188, marginBottom: 8, display: 'block'}}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined/>}
                        size="small"
                        style={{width: 90}}
                    >
                        Search
                    </Button>
                    <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{width: 90}}>
                        Reset
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{color: filtered ? '#1890ff' : undefined}}/>,
        onFilter: (value, record) =>
            record[dataIndex]
                ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
                : '',
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => this.searchInput.select(), 100);
            }
        },
        render: text =>
            this.state.searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{backgroundColor: '#ffc069', padding: 0}}
                    searchWords={[this.state.searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        this.setState({
            searchText: selectedKeys[0],
            searchedColumn: dataIndex,
        });
    };

    handleReset = clearFilters => {
        clearFilters();
        this.setState({searchText: ''});
    };

    render() {
        const columns = [
            {
                title: 'Nazwa',
                dataIndex: 'nazwa',
                key: 'nazwa',
                width: '30%',
                ...this.getColumnSearchProps('nazwa'),
            },
            {
                title: 'Typ',
                dataIndex: 'typ',
                key: 'typ',
                width: '20%',
                ...this.getColumnSearchProps('typ'),
            },
            {
                title: 'Stawka',
                dataIndex: 'stawka',
                key: 'stawka',
                ...this.getColumnSearchProps('stawka'),
            }, {
                title: 'Cena netto',
                dataIndex: 'cena_netto',
                key: 'cena_netto',
                ...this.getColumnSearchProps('cena_netto'),
            },
        ];

        const notDiscountColumnPart = {
            title: 'Functions',
            dataIndex: 'functions',
            key: 'functions',
            render: (text, record) => (
                <div>
                    <AdditionalTableButtons item={record}/>
                </div>
            )
        }

        const getColumns = () => {
            if(this.props.type === "discount"){
                return columns
            }else {
                return [...columns, notDiscountColumnPart]

            }
        }

        {
            if (this.props.data.length > 1) {
                return <Table columns={getColumns()}
                              dataSource={[...this.props.data]}/>;
            }
        }
        return <div><AppStatusBox type={'sleep'}/></div>
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.products,
        type: ownProps.type
    }
}

const ProductTableContainer = connect(mapStateToProps, {})(ProductTable);

export default ProductTableContainer
