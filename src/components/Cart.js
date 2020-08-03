import React, { Component } from 'react';


// import CartItem from './CartItem'

class Cart extends Component {

   

    render() {
        const { children } = this.props
        // {children[0]} -> <CartItem />
        // {children[1]} -> <CartResult />
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
                        {children[0]}                     
                    </tbody>
                </table>
                {children[1]}               
            </section>
        );
    }
}


export default Cart;

