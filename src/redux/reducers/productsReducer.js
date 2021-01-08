export const productsReducer = (state = {}, action) => {
    switch (action.type) {
        case "SET_PRODUCTS":{
            debugger
            return {
                ...state,
                ...action.products
            }
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
