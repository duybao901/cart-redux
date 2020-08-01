import React, { Component } from 'react';


class CartItem extends Component {

    render() {
        return (
            <tr>
                <td>
                    <img className="cart__img" src={this.props.src} alt="cart img"></img>
                </td>
                <td className="cart__name">I phone 7 Plus</td>
                <td className="cart__price">700$</td>
                <td className="cart__quantity">
                    <span>
                        3
                    </span>
                    <button className={`btn-square`}>-</button>
                    <button className={`btn-square`}>+</button>

                </td>
                <td className="cart__total">2100$</td>
                <td className="cart__delete">
                    <button className={`btn-square`}>x</button>
                </td>
            </tr>
        );
    }
}

export default CartItem;
