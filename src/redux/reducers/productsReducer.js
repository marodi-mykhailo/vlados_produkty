export const productsReducer = (state = [], action) => {
    switch (action.type) {
        case "SET_PRODUCTS":{
            return [
                ...state,
                ...action.products.map(i => ({...i, key: i.produkt_id}) ),
            ]
        }
        default:
            return state
    }
}

export const loadProducts = () => ({
    type: "LOAD_PRODUCTS"
})

export const setProducts = (products) => ({
    type: "SET_PRODUCTS",
    products
})
