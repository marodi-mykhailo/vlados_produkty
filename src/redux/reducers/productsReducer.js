export const productsReducer = (state = [], action) => {
    switch (action.type) {
        case "SET_PRODUCTS": {
            return [
                ...action.products.map(i => ({...i, key: i.produkt_id})),
            ]
        }
        case "SET_CREATED_PRODUCT": {
            return [
                ...state,
                {
                    ...action.createdProduct,
                    key: action.createdProduct.id
                }
            ]
        }
        case "SET_UPDATED_PRODUCT": {
            return state.map(i => i.produkt_id === action.id ? {
                ...action.productData,
                key: action.productData.produkt_id
            } : i)
        }
        case "SET_DELETED_PRODUCT": {
            return state.filter(i => i.produkt_id !== action.id)
        }
        default:
            return state
    }
}

export const loadProducts = () => ({
    type: "LOAD_PRODUCTS"
})

export const loadProductsWithDiscount = (nip) => ({
    type: "LOAD_PRODUCTS_WITH_DISCOUNT",
    nip
})

export const setProducts = (products) => ({
    type: "SET_PRODUCTS",
    products
})

//////////// CREATE PRODUCT ////////////

export const createProduct = (productData) => ({
    type: "CREATE_PRODUCT",
    productData
})

export const setCreatedProduct = (createdProduct) => ({
    type: "SET_CREATED_PRODUCT",
    createdProduct
})

/////////////  UPDATE PRODUCT  ////////////

export const updateProduct = (id, productData) => ({
    type: "UPDATE_PRODUCT",
    id,
    productData
})

export const setUpdatedProduct = (id, productData) => ({
    type: "SET_UPDATED_PRODUCT",
    id,
    productData
})

/////////////  DELETE PRODUCT  ////////////

export const deleteProduct = (id) => ({
    type: "DELETE_PRODUCT",
    id
})

export const setDeletedProduct = (id) => ({
    type: "SET_DELETED_PRODUCT",
    id
})
