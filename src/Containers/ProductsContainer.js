import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Products from '../components/Products'
class ProductsContainer extends Component {
    render() {
        var { products } = this.props
        return (
            <Products products={products}></Products>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
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
    ).isRequired
}

export default connect(mapStateToProps, null)(ProductsContainer);
