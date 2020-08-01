var initialState = [
    {
        id: 1,
        name: 'I phone 7 Plus',
        description: 'Điện thoại do Appple sản xuất',
        price: 700,
        inventory: 20 // Hàng trong kho
    },
    {
        id: 2,
        name: 'Samsung Galaxy S8 plus',
        description: 'Điện thoại do Samsung sản xuất',
        price: 800,
        inventory: 15 // Hàng trong kho
    },
    {
        id: 3,
        name: 'I phone 8 Plus',
        description: 'Điện thoại do Appple sản xuất',
        price: 900,
        inventory: 10 // Hàng trong kho
    }
]

const product = (state = initialState, action) => {
    switch (action.type) {        
        default: return [...state];
    }
}

export default product;