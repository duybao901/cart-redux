import React, { Component } from 'react';


class Product extends Component {
    render() {        
        return (
            <div className="col-xs-12 col-md-6 col-lg-4">
                <div className="product__item">
                    <div className="product__img">
                        <img src={this.props.src} alt="product img"></img>
                    </div>
                    <span className="product__name">Iphone 7 Plus</span>
                    <ul>
                        <li className="prodcut__rate"><i className="fas fa-star"></i></li>
                        <li className="prodcut__rate"><i className="fas fa-star"></i></li>
                        <li className="prodcut__rate"><i className="fas fa-star"></i></li>
                        <li className="prodcut__rate"><i className="fas fa-star"></i></li>
                        <li className="prodcut__rate"><i className="far fa-star"></i></li>
                    </ul>
                    <span className="product__desctiption">Điện thoại do Appple sản xuất</span>
                    <div className="product__prices">
                        <span className="product__price">700$</span>
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
