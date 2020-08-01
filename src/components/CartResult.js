import React, { Component } from 'react';

class Cart extends Component {

    render() {
        return (
            <div className="cart__purchase">
                <span>Tổng Tiền</span>
                <span>3100$</span>
                <button className={`btn-square btn-square--txtuper`}>complete purcase &rarr;</button>
            </div>
        );
    }
}

export default Cart;
