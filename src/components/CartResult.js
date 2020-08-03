import React, { Component } from 'react';

class Cart extends Component {

    render() {
        const { total } = this.props
        return (
            <div className="cart__purchase">
                <span>Tổng Tiền</span>
                <span>{total}$</span>
                <button className={`btn-square btn-square--txtuper`}>complete purcase &rarr;</button>
            </div>
        );
    }
}

export default Cart;
