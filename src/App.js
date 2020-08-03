import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
import ProductsContainer from './Containers/ProductsContainer'
import MessageContainer from './Containers/MessageContainer'
import CartContainer from './Containers/CartContainer'
import Footer from './components/Footer'


class App extends Component {
    render() {        
        return (
            <div>
                <Header></Header>                
                <ProductsContainer></ProductsContainer>
                <MessageContainer></MessageContainer>
                <CartContainer></CartContainer>
                <Footer></Footer>                
            </div>
        );
    }
}

export default App;
