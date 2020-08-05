import * as types from '../Constans/ActionType'

// Mang cac object: products & quantity
var data = JSON.parse(localStorage.getItem('carts'));
var initialState = data ? data :[]

var carts = (state = initialState, action) => {
    var newState, index;
    var { products, quantity } = action
    switch (action.type) {

        // Add Product To Cart
        case types.ADD_TO_CART:
            newState = [...state];            
            index = newState.findIndex((product) => {
                return product.products.id === products.id;
            })
            if (index === -1) {                
                newState.push( 
                    {
                        products,
                        quantity
                    }                
                )
            } else {    
                newState[index].quantity += 1;
            }
            // var index = findProductInCarts(state, products);           
            localStorage.setItem('carts', JSON.stringify(newState))
            return newState

        // Delete Product In Cart
        case types.DELETE_PRODUCT_IN_CART:
            newState = [...state];            
            index = newState.findIndex((product) => {
                return product.products.id === products.id;
            })
            if (index !== -1) {
                newState.splice(index, 1);
            }
            localStorage.setItem('carts', JSON.stringify(newState))
            return newState;
        
        
        // Update Product In Cart
        case types.UPDATE_PRODUCT_IN_CART:
            newState = [...state]
            index = newState.findIndex((product) => {
                return product.products.id === products.id;
            })
            console.log(quantity)
            if (quantity > 0) {
                newState[index].quantity = quantity;
            }
            localStorage.setItem('carts', JSON.stringify(newState));
            return newState;

        default: return state
    }   
}

export default carts;