import * as types from '../Constans/ActionType'

export const addToCart = (products, quantity) => {
    return {
        type: types.ADD_TO_CART,
        products,
        quantity
    }
}