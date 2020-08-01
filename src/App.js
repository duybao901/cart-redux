import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
import ProductsContainer from './Containers/ProductsContainer'
import Message from './components/Message'
import Cart from './components/Cart'
import Footer from './components/Footer'


class App extends Component {
    render() {        
        return (
            <div>
                <Header></Header>                
                <ProductsContainer></ProductsContainer>
                <Message></Message>
                <Cart></Cart>

                <Footer></Footer>                
            </div>
        );
    }
}

export default App;
