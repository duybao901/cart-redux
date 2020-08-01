import React, { Component } from 'react';

import Product from './Product'

class Products extends Component {
    render() {
        return (
            <div>     
                <section className="container heading text-center">
                    <h1>Danh Sách Sản Phẩm</h1>
                </section>
                <section className="product container">
                    <div className="row">
                        <Product src={require('../img/product_samsung.jpg')}></Product>  
                        <Product src={require('../img/DSC6046.jpg')}></Product>
                        <Product src={require('../img/product_iphone6plus.png')}></Product>
                    </div>
                </section>                
            </div>
        );
    }
}

export default Products;
