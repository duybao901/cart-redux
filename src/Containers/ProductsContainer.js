import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import * as actions from '../Actions/index'

import Products from '../components/Products'
import Product from '../components/Product'

class ProductsContainer extends Component {

    showProduct = (products) => {
        var { onAddToCart, onChangeMessage } = this.props 
        var result = null; 
        result = products.map((product, index) => {
            return <Product
                        product={product}
                        key={index}
                        onAddToCart={onAddToCart}
                        onChangeMessage={onChangeMessage}
                    >
                    </Product>
        })
        return result
    }

    render() {
        var { products } = this.props
        return (
            <Products>
                {this.showProduct(products)}
            </Products>
        );
    }
}


// products va mang chua cac object
// PropTypes.arrayOf(PropTypes.shape({}))
ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            description: PropTypes.string.isRequired,
            // rate: PropTypes.number. isRequired,
            inventory: PropTypes.number.isRequired
        })
    ).isRequired,
    onAddToCart: PropTypes.func.isRequired,
    onChangeMessage: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAddToCart: (product) => {
            dispatch(actions.addToCart(product,1)) // Acc 1 san pham
        },
        onChangeMessage: (message) => {
            dispatch(actions.changeMessage(message)) // Thay doi message
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
