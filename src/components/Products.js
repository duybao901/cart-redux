import React, { Component } from 'react';

import Product from './Product'

class Products extends Component {

    showProduct(prodcuts) {
        var result = [];      
        result = prodcuts.map((product, index) => {
            return (<div key={index} className="col-xs-12 col-md-6 col-lg-4" >
                <Product product={product} />
            </div>)
        })        
        return result
    }

    render() {
        var { products } = this.props
        return (
            <div>
                <section className="container heading text-center">
                    <h1>Danh Sách Sản Phẩm</h1>
                </section>
                <section className="product container">
                    <div className="row">
                        {this.showProduct(products)}
                    </div>
                </section>
            </div>
        );
    }
}

export default Products;
