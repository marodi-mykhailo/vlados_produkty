import axios from "axios";

const settings = {}

const instance = axios.create({
    baseURL: 'http://produkty-uslugi.herokuapp.com/',
    ...settings
})

export const productAPI = {
    getAllProducts() {
        return instance.get('products')
    },
    getProductById(id) {
        return instance.get(`products/${id}`)
    },
    getProductsWithNipDiscount(nip) {
        return instance.get(`products-with-discount/${nip}`)
    },
    deleteProductById(id) {
        return instance.delete(`products/${id}`)
    },
    createProduct(productData) {
        return instance.post('products', productData)
    },
    updateProduct(id, productData) {
        return instance.put(`products/${id}`, productData)
    }
}
