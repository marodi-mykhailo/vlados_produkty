import {Form, Input, Button, Select, Space} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {createProduct} from "../../redux/reducers/productsReducer";
import SyncOutlined from "@ant-design/icons/lib/icons/SyncOutlined";
import {useEffect} from "react";
import {setAppStatus} from "../../redux/reducers/appReducer";

const {Option} = Select;
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const ProductForm = (props) => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const formStatus = useSelector(store => store.app.formStatus)
    const appStatus = useSelector(store => store.app.appStatus)

    const onFinish = (values) => {
        let productData = {
            "typ": values["Typ"],
            "nazwa": values["Nazwa"],
            "cena_netto": values["Cena Netto"],
            "vatId": values["Vat"]
        }

        dispatch(createProduct(productData));
        form.resetFields();
    };

    if (formStatus === "successes") {
        debugger
        props.setIsModalVisible(false)
    }

    const onReset = () => {
        form.resetFields();
    };

    return (
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
            <Form.Item
                name="Typ"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input placeholder="Typ"/>
            </Form.Item>
            <Form.Item
                name="Nazwa"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input placeholder="Nazwa"/>
            </Form.Item>
            <Form.Item
                name="Cena Netto"
                rules={[
                    {
                        required: true,

                    },
                ]}
            >
                <Input type={"number"} placeholder="Cenna Netto"/>
            </Form.Item>
            <Form.Item
                name="Vat"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Select
                    placeholder="Vat, %"
                    allowClear
                >
                    <Option value="1">8</Option>
                    <Option value="2">23</Option>
                </Select>
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Button type="primary"
                        htmlType="submit"
                        icon={appStatus === "loading" && <SyncOutlined spin/>}
                >
                    Submit
                </Button>
                <Button htmlType="button" onClick={onReset}>
                    Reset
                </Button>
            </Form.Item>
        </Form>
    );
};

export default ProductForm;
