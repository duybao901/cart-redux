import React, { Component } from 'react';
import { connect } from 'react-redux'

import Product from './Product'

class Products extends Component {

    showProduct(prodcuts) {
        var result = null;
        if (prodcuts.length > 0) {
            return result = prodcuts.map((product, index) => {
                return <Product product={product} key={index.toString()} ></Product>
            })
        }
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

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, null)(Products);
