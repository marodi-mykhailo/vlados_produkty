import React, {useState} from 'react';
import {Button, Modal, Space} from "antd";
import ProductForm from "../ProductForm/ProductForm";
import {useDispatch} from "react-redux";
import {deleteProduct} from "../../redux/reducers/productsReducer";

const AdditionalTableButtons = ({item}) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const dispatch = useDispatch();

    const onDeleteHandler = () => {
        dispatch(deleteProduct(item.produkt_id))
    }

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <div>
            <Space>
                <Button type="dashed" onClick={showModal} block>
                    Edit
                </Button>
                <Modal title="Create Product"
                       visible={isModalVisible}
                       onCancel={handleCancel}
                       footer={[]}>
                    <ProductForm type={"edit"} dataItem={item} setIsModalVisible={setIsModalVisible}/>
                </Modal>
                <Button type="dashed" danger onClick={onDeleteHandler} block>
                    Delete
                </Button>
            </Space>
        </div>
    );
};

export default AdditionalTableButtons;
