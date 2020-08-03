import * as types from '../Constans/ActionType'

// Mang cac object: products & quantity
var data = JSON.parse(localStorage.getItem('carts'));
var initialState = data ? data :[]

var carts = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            var newState = [...state];
            const { products, quantity } = action
            var index = newState.findIndex((product) => {
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
            return newState;
        default: return state
    }   
}

export default carts;