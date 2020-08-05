import * as types from '../Constans/ActionType'

export const addToCart = (products, quantity) => {
    return {
        type: types.ADD_TO_CART,
        products,
        quantity
    }
}

export const changeMessage = (message) => {
    return {
        type: types.CHANGE_MESSAGE,
        message
    }
}

export const deleteProductInCart = (products) => {
    return {
        type: types.DELETE_PRODUCT_IN_CART,
        products
    }
}

export const updateProductInCart = (products, quantity) => {
    return {
        type: types.UPDATE_PRODUCT_IN_CART,
        products,
        quantity
    }
}