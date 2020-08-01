import React, { Component } from 'react';

import CartItem from './CartItem'
import CartResult from './CartResult'

class Cart extends Component {

    render() {
        return (
            <section className="container cart">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th className="cart__table-name">Sẩn phẩm</th>
                            <th>Giá</th>
                            <th>Số Lượng</th>
                            <th>Tổng Cộng</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <CartItem src={require('../img/product_samsung.jpg')}></CartItem>               
                    </tbody>
                </table>
                <CartResult></CartResult>
            </section>
        );
    }
}

export default Cart;
