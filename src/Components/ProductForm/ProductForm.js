import {Form, Input, Button, Select} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {createProduct, updateProduct} from "../../redux/reducers/productsReducer";
import SyncOutlined from "@ant-design/icons/lib/icons/SyncOutlined";


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

    if(props.type === "edit"){
        form.setFieldsValue({
            "Typ": props.dataItem.typ,
            "Nazwa": props.dataItem.nazwa,
            "Cena Netto": props.dataItem.cena_netto,
            "Vat": props.dataItem.stawka === "8" ? "1" : "2",
            "Jednostka miary": props.dataItem.jednostka_miary,
        })
    }

    const onFinish = (values) => {
        if(props.type === "edit"){
            let productData = {
                "typ": values["Typ"],
                "nazwa": values["Nazwa"],
                "cena_netto": values["Cena Netto"],
                "vat_id": values["Vat"],
                "jednostka_miary": values["Jednostka miary"]
            }
            dispatch(updateProduct(props.dataItem.produkt_id, productData))
            form.resetFields();
        }else {
            let productData = {
                "typ": values["Typ"],
                "nazwa": values["Nazwa"],
                "cena_netto": values["Cena Netto"],
                "vatId": values["Vat"],
                "jednostka_miary": values["Jednostka miary"]
            }
            dispatch(createProduct(productData));
            form.resetFields();
        }
    };

    if (formStatus === "successes") {
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
                name="Jednostka miary"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input placeholder="Jednostka miary"/>
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
