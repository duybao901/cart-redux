import React, { Component } from 'react';

import * as Message from '../Constans/Message'

class CartItem extends Component {

    showTotal = (price, quantity) => { 
        return price*quantity
    }

    onDeleteProductInCart = (products) => {
        this.props.onDeleteProductInCart(products);
        this.props.onChangeMessage(Message.MSG_DELETE_IN_CART_CUCCESS)
    }

    render() {
        const { cart, quantity } = this.props;
        return (
            <tr>
                <td>
                    <img className="cart__img" src={cart.products.img} alt="cart img"></img>
                </td>
                <td className="cart__name">{cart.products.name}</td>
                <td className="cart__price">{cart.products.price}$</td>
                <td className="cart__quantity">
                    <span>
                        {quantity}
                    </span>
                    <button className={`btn-square`}>-</button>
                    <button className={`btn-square`}>+</button>

                </td>
                <td className="cart__total">{this.showTotal(cart.products.price, quantity)}$</td>
                <td className="cart__delete">
                    <button
                        className={`btn-square`}
                        onClick={() => this.onDeleteProductInCart(cart.products)}
                    >x</button>
                </td>
            </tr>
        );
    }
}

export default CartItem;
