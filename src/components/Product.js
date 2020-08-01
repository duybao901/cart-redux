import React, { Component } from 'react';

class Product extends Component {

    showRate(rating) {
        var result = [];
        for (var i = 1; i <= rating; i++) {
            result.push(<i className="fas fa-star" key={i}></i>);
        }
        for (var j = 1; j <= (5 - rating); j++) {
            result.push(<i className="far fa-star" key={i+j}></i>);
        }
        return result
    }

    render() {
        var { product } = this.props
        return (
            <div className="product__item" >
                <div className="product__img" >
                    <img src={product.img} alt={product.name}></img>
                </div>
                <span className="product__name">{product.name}</span>
                <ul>
                    <li className="prodcut__rate">
                        {this.showRate(product.rate)}
                    </li>
                </ul>
                <span className="product__desctiption">{product.description}</span>
                <div className="product__prices">
                    <span className="product__price">{product.price}$</span>
                    <button className="product__cart-btn">
                        <i className="fas fa-shopping-cart"></i>
                    </button>
                </div>
            </div>
        );
    }

}

export default Product;
