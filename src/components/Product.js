import React, { Component } from 'react';

class Product extends Component {

    showRate(rating) {
        var result = [];
        for (let i = 1; i <= rating; i++){
            result.push(<i className="fas fa-star"></i>);
        }
        for (let i = 1; i <= (5-rating); i++) {
            result.push(<i className="far fa-star" ></i>);
        }
        return result
    }

    render() {      
        var { product } = this.props
        return (
            <div className="col-xs-12 col-md-6 col-lg-4">
                <div className="product__item" >
                    <div className="product__img">
                        <img src={product.img} alt={product.name}></img>
                    </div>
                    <span className="product__name">{product.name}</span>
                    <ul>
                        <li className="prodcut__rate">
                            {this.showRate(product.rate) }
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
            </div>
        );
    }

}

export default Product;
