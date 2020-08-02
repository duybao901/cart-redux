import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Cart from '../components/Cart';
import CartItem from '../components/CartItem'
import * as Message from '../Constans/Message'


class CartContainer extends Component{

    showCartItem(carts) {
        var result = Message.MSG_CART_EMPTY;
        if (carts.length > 0) {
            result = carts.map((cart, index) => {
                return <CartItem
                    key={index}
                    cart={cart}
                    index={index}
                    quantity={cart.quantity}>                    
                </CartItem>
            }) 
        }
        return result
    }

    render() {
        const { carts } = this.props;
        return <div>
            <Cart>
                {this.showCartItem(carts)}
            </Cart>
        </div>
    }
}

CartContainer.propTypes = {
    carts: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            description: PropTypes.string.isRequired,
            // rate: PropTypes.number. isRequired,
            inventory: PropTypes.number.isRequired
        }),
        quantity: PropTypes.number.isRequired
    }))
}

const mapStateToProps = (state) => {
    return {
        carts: state.carts
    }
}


export default connect(mapStateToProps, null)(CartContainer);