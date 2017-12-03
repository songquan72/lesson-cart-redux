var initialState = [
    {
        id: 1,
        name: 'Iphone 6 Plus',
        image: 'https://www.slickwraps.com/media/catalog/product/cache/1/image/580x580/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone7_view1_new-color_red.jpg',
        description: ' Sản phẩm do Apple sản xuất',
        price: 500,
        inventory: 10,
        rating: 5
    },
    {
        id: 2,
        name: 'Samsung Galaxy S6',
        image: 'http://images.samsung.com/is/image/samsung/ca-galaxy-s6-g920w8-sm-g920wzkaxac-000000001-front-black?$PD_GALLERY_JPG$',
        description: ' Sản phẩm do Samsung sản xuất',
        price: 400,
        inventory: 15,
        rating: 4
    },
    {
        id: 3,
        name: 'Nokia 6',
        image: 'https://cdn.tgdd.vn/Products/Images/42/90836/nokia-6-400x460.png',
        description: ' Sản phẩm do Nokia sản xuất',
        price: 300,
        inventory: 5,
        rating: 3
    }
];

const products = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default products;