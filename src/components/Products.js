import React, { Component } from 'react';


class Products extends Component {

   
    render() {
        var { children } = this.props
        return (
            <div>
                <section className="container heading text-center">
                    <h1>Danh Sách Sản Phẩm</h1>
                </section>
                <section className="product container">
                    <div className="row">
                        {children}
                    </div>
                </section>
            </div>
        );
    }
}

export default Products;
