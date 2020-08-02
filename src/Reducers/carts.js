import * as types from '../Constans/ActionType'

// Mang cac object: products & quantity
// var data = JSON.parse(localStorage.getItem('carts'));
var initialState = [
    {
        products:
        {
            id: 1,
            name: 'I phone 7 Plus',
            description: 'Điện thoại do Appple sản xuất',
            img: 'https://cdn.fptshop.com.vn/Uploads/Originals/2019/1/21/636836609818617272_ip7-plus-hong-1.png',
            price: 700,
            rate: 4,
            inventory: 20 // Hàng trong kho
        },
        quantity: 2
    }
]

var cart = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            console.log(action)
            return state;
        default: return state
    }
}

export default cart;