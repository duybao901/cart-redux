var initialState = [
    {
        id: 1,
        name: 'I phone 7 Plus',
        description: 'Điện thoại do Appple sản xuất',
        img: 'https://cdn.fptshop.com.vn/Uploads/Originals/2019/1/21/636836609818617272_ip7-plus-hong-1.png',
        price: 700,
        rate: 4,
        inventory: 20 // Hàng trong kho
    },
    {
        id: 2,
        name: 'Samsung Galaxy S8 Plus',
        description: 'Điện thoại do Samsung sản xuất',
        img: 'https://www.duchuymobile.com/images/detailed/10/s8-plus-xanh_gquv-tf.jpg',
        price: 800,
        rate: 4,
        inventory: 15 // Hàng trong kho
    },
    {
        id: 3,
        name: 'I phone 8 Plus',
        description: 'Điện thoại do Appple sản xuất',
        img: 'https://didongviet.vn/pub/media/catalog/product//i/p/iphone-8-plus-quoc-te-mau-trang-didongviet.jpg',
        price: 900,
        rate: 5,
        inventory: 10 // Hàng trong kho
    }
]

const product = (state = initialState, action) => {
    switch (action.type) {
        default: return [...state];
    }
}

export default product;